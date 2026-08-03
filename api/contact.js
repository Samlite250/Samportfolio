import { supabase } from './config/supabase.js';

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

  let body;
  try {
    body = req.body || {};
  } catch {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message' });
  }

  try {
    if (!supabase) {
      console.error('Supabase client not configured');
      return res.status(500).json({ error: 'Message storage unavailable' });
    }

    const { error } = await supabase.from('contacts').insert([{ name, email, message }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Message could not be saved' });
    }

    res.status(200).json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error. Please email me directly.' });
  }
}
