import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Routing Protocols',
    color: 'bg-primary',
    note: 'This is where I spend most of my time.',
    skills: [
      { name: 'OSPF (single & multi-area)',     level: 93 },
      { name: 'BGP (iBGP / eBGP / policies)',   level: 87 },
      { name: 'EIGRP',                           level: 84 },
      { name: 'Static & PBR',                   level: 91 },
    ]
  },
  {
    category: 'Switching & LAN',
    color: 'bg-orange-500',
    note: 'VLANs are second nature at this point.',
    skills: [
      { name: 'VLANs, trunking, VTP',            level: 96 },
      { name: 'STP / RSTP / MST',                level: 88 },
      { name: 'EtherChannel (LACP / PAgP)',       level: 85 },
      { name: 'Layer 3 switching (SVIs)',         level: 90 },
    ]
  },
  {
    category: 'Security & VPN',
    color: 'bg-teal-500',
    note: 'Solid fundamentals, still deepening this.',
    skills: [
      { name: 'ACLs & NAT / PAT',                level: 93 },
      { name: 'IPSec site-to-site VPN',          level: 86 },
      { name: 'Cisco ASA / Firepower',            level: 79 },
      { name: '802.1X / Cisco ISE',              level: 71 },
    ]
  },
  {
    category: 'Tools & Platforms',
    color: 'bg-primary',
    note: 'GNS3 is basically my second home.',
    skills: [
      { name: 'Cisco IOS / IOS-XE / NX-OS',     level: 92 },
      { name: 'GNS3 / EVE-NG / Packet Tracer',  level: 95 },
      { name: 'Wireshark / TCPDump',            level: 86 },
      { name: 'Ansible (network automation)',   level: 68 },
    ]
  },
];

const SkillBar = ({ name, level, color, i }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1.5">
      <span className="text-gray-600 text-sm">{name}</span>
      <span className="text-gray-400 font-mono text-xs">{level}%</span>
    </div>
    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="mb-6">
        <p className="section-label"><span className="w-8 h-px bg-primary inline-block" />02 — Skills</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          What I'm <span className="text-gradient">good at</span>
        </h2>
      </div>
      <p className="text-gray-400 font-mono text-xs mb-12 italic">
        * honest estimates — 100% doesn't exist in networking
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, gIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gIdx * 0.1 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-1 h-5 rounded-full ${group.color}`} />
              <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wider">{group.category}</h3>
            </div>
            <p className="text-gray-400 text-xs italic mb-6 pl-4">{group.note}</p>
            {group.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} color={group.color} i={i} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
