import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wifi, GraduationCap, Server, Globe, Cpu } from 'lucide-react';

const certifications = [
  { name: 'CCNA',           body: 'Cisco Systems',  year: '2022', cls: 'badge-orange' },
  { name: 'Network+',       body: 'CompTIA',        year: '2021', cls: 'badge-blue'   },
  { name: 'CCNP (in view)', body: 'Cisco Systems',  year: '2026', cls: 'badge-teal'   },
];

const stack = [
  'Cisco IOS / IOS-XE', 'BGP / OSPF / EIGRP', 'VLANs & 802.1Q',
  'Cisco ASA / FTD', 'IPSec VPN', 'STP / RSTP',
  'MPLS', 'GNS3 / Packet Tracer', 'Wireshark',
];

const languages = [
  { lang: 'English',     level: 'Professional',   cls: 'badge-blue'  },
  { lang: 'French',      level: 'Conversational', cls: 'badge-gray'  },
  { lang: 'Kinyarwanda', level: 'Native',         cls: 'badge-teal'  },
];

const About = () => (
  <section id="about" className="py-24" style={{ background: '#f0f7ff' }}>
    <div className="max-w-6xl mx-auto px-6 md:px-12">

      <div className="mb-14">
        <p className="section-label"><span className="w-8 h-px inline-block" style={{ background: '#0e63bd' }} />01 — About</p>
        <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#111827' }}>
          A bit about <span className="text-gradient">who I am</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-7">

        {/* Bio card */}
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-2 card-on-tint p-8 md:p-10">

          <div className="flex items-center gap-4 mb-7">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(14,99,189,0.1)', border: '1px solid rgba(14,99,189,0.2)' }}>
              <Cpu size={20} style={{ color: '#0e63bd' }} />
            </div>
            <div>
              <h3 className="font-bold text-lg" style={{ color: '#111827' }}>Engineer Fab</h3>
              <p className="font-mono text-xs" style={{ color: '#0e63bd' }}>CCNA · Routing & Switching · Kigali, Rwanda</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-medium" style={{ color: '#1f2937', lineHeight: '1.8' }}>
              Honestly? I fell into networking because I kept asking "why is the internet slow?" until someone handed me a Cisco Packet Tracer lab and said "figure it out." I did. Never stopped.
            </p>
            <p style={{ color: '#4b5563' }}>
              These days I mostly live inside <strong style={{ color: '#0e63bd' }}>Cisco IOS</strong> — configuring OSPF multi-area designs, tuning BGP policies, building VLANs that don't leak, arguing with STP until it behaves. Routing & switching is my home turf.
            </p>
            <p style={{ color: '#4b5563' }}>
              I've built everything from a 20-device branch office to a 500-user campus with redundant cores and full ASA perimeter security. The problems I like most are the ones where someone says <em style={{ color: '#d95300' }}>"it was working yesterday"</em> — those usually have interesting answers.
            </p>
            <p className="text-sm italic pl-4" style={{ color: '#9ca3af', borderLeft: '2px solid rgba(14,99,189,0.2)' }}>
              Working toward my CCNP. Some days I think I'm close. Other days OSPF LSA types remind me there's always more to learn — which is honestly the part I like.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { icon: <Shield size={17} style={{ color: '#0e63bd' }} />, label: 'Security-first',  sub: 'Default deny, explicit permit' },
              { icon: <Server size={17} style={{ color: '#d95300' }} />, label: 'Redundancy nerd', sub: 'HSRP, ECMP, dual-ISP or bust'  },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}>
                <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center flex-shrink-0" style={{ border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>{icon}</div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#1f2937' }}>{label}</p>
                  <p className="text-xs" style={{ color: '#9ca3af' }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Certs */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-on-tint p-6">
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={15} style={{ color: '#0e63bd' }} />
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: '#374151' }}>Certs & Education</h4>
            </div>
            {certifications.map(c => (
              <div key={c.name} className="flex items-center justify-between py-2.5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <div>
                  <p className={`badge ${c.cls} text-xs`}>{c.name}</p>
                  <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>{c.body}</p>
                </div>
                <span className="badge badge-gray">{c.year}</span>
              </div>
            ))}
          </motion.div>

          {/* Stack */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="card-on-tint p-6">
            <div className="flex items-center gap-2 mb-5">
              <Wifi size={15} style={{ color: '#d95300' }} />
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: '#374151' }}>What I work with</h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {stack.map(s => (
                <span key={s} className="badge badge-gray cursor-default hover:badge-blue transition-colors text-xs">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="card-on-tint p-6">
            <div className="flex items-center gap-2 mb-5">
              <Globe size={15} style={{ color: '#06946e' }} />
              <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: '#374151' }}>I speak</h4>
            </div>
            {languages.map(l => (
              <div key={l.lang} className="flex items-center justify-between py-2.5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <span className="text-sm font-medium" style={{ color: '#374151' }}>{l.lang}</span>
                <span className={`badge ${l.cls}`}>{l.level}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default About;
