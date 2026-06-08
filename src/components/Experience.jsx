import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Network Engineer', company: 'TechConnect Solutions',
    period: 'Jan 2023 – Present', type: 'Full-time',
    achievements: [
      'Designed and deployed Cisco-based enterprise networks for 10+ corporate clients across East Africa.',
      'Engineered BGP multi-homed WAN solutions eliminating single-ISP dependency for financial sector clients.',
      'Reduced network incidents by 45% through automated Ansible-based configuration management.',
      'Mentored 3 junior engineers on Cisco IOS troubleshooting and best practices.',
    ]
  },
  {
    role: 'Network Engineer', company: 'DataLink ISP',
    period: 'Jun 2021 – Dec 2022', type: 'Full-time',
    achievements: [
      'Managed BGP peering sessions with 4 Tier-1 upstream carriers — maintained 99.9% WAN uptime.',
      'Deployed DMVPN and SD-WAN solutions for 25+ enterprise SME customers across the region.',
      'Led NOC escalation team — average P1 incident resolution time reduced to under 28 minutes.',
      'Configured QoS policies on Cisco ISR fleet to prioritize VoIP across MPLS circuits.',
    ]
  },
  {
    role: 'Junior Network Technician', company: 'NetServ Africa',
    period: 'Jan 2020 – May 2021', type: 'Full-time',
    achievements: [
      'Deployed and configured Cisco Catalyst switches, ISR routers, and Meraki wireless APs.',
      'Completed structured cabling and data center rack installations for 5 greenfield projects.',
      'Assisted in network audit documentation — produced IP addressing, VLAN, and topology diagrams.',
    ]
  },
];

const Experience = () => (
  <section id="experience" className="py-24 bg-[#fff8f0]">
    <div className="container mx-auto px-6 md:px-12 max-w-4xl">
      <div className="mb-16">
        <p className="section-label"><span className="w-8 h-px bg-primary inline-block" />05 — Experience</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Work <span className="text-gradient">history</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

        <div className="space-y-10 pl-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-[2.15rem] top-5 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm" />

              <div className="glass-card p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-gray-900 font-bold text-xl">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-gray-400 font-mono text-xs">{exp.period}</span>
                      <span className="text-[10px] font-mono font-bold text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full uppercase">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                      <span className="text-primary mt-1 flex-shrink-0 text-xs">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
