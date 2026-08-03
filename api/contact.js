import { supabase } from './config/supabase.js';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'samlite250@gmail.com';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }

    let savedToDb = false;
    let emailed = false;

    // 1) Save to Supabase if configured (optional)
    if (supabase) {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (!error) savedToDb = true;
    }

    // 2) Forward via FormSubmit.co so an email is always delivered.
    //    First submission triggers a one-time verification email to CONTACT_EMAIL.
    try {
      const formRes = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New message from ${name} via portfolio`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      emailed = formRes.ok;
    } catch (e) {
      console.error('FormSubmit forwarding failed:', e);
    }

    if (!savedToDb && !emailed) {
      return res.status(500).json({ error: 'Message could not be delivered. Please email me directly.' });
    }

    res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please email me directly.' });
  }
}
