import React from 'react';
import { motion } from 'framer-motion';
import { Network, Shield, Server, Activity, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Network, title: 'Enterprise Network Design',
    description: 'End-to-end LAN/WAN topology design using Cisco best practices — hierarchical three-tier architecture, OSPF/BGP routing, and redundant uplinks for zero-downtime operations.',
    tags: ['LAN / WAN', 'OSPF', 'BGP', 'Redundancy'],
    iconColor: 'text-primary', iconBg: 'bg-primary/8 border-primary/15',
  },
  {
    icon: Shield, title: 'Network Security & Hardening',
    description: 'Firewall policy design, VPN tunnels, ACLs, and network segmentation using Cisco ASA / Firepower. Zero-trust network access with Cisco ISE and 802.1X.',
    tags: ['Cisco ASA', 'VPN', 'ACL', 'Zero Trust'],
    iconColor: 'text-orange-500', iconBg: 'bg-orange-50 border-orange-100',
  },
  {
    icon: Server, title: 'Infrastructure Deployment',
    description: 'Full rack-and-stack deployment of Cisco routers, Catalyst/Nexus switches, and wireless infrastructure. VLAN segmentation, QoS, and structured cabling.',
    tags: ['Cisco Catalyst', 'Nexus', 'QoS', 'VLAN'],
    iconColor: 'text-teal-500', iconBg: 'bg-teal-50 border-teal-100',
  },
  {
    icon: Activity, title: 'Monitoring & NOC Support',
    description: 'Proactive monitoring with SolarWinds, PRTG, and custom SNMP dashboards. Rapid incident triage, root-cause analysis, and SLA-based escalation.',
    tags: ['SolarWinds', 'SNMP', 'PRTG', 'SLA'],
    iconColor: 'text-primary', iconBg: 'bg-primary/8 border-primary/15',
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-[#f0f7ff]">
    <div className="container mx-auto px-6 md:px-12">
      <div className="mb-16">
        <p className="section-label"><span className="w-8 h-px bg-primary inline-block" />03 — Services</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          What I <span className="text-gradient">deliver</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-12 h-12 rounded-xl border flex-shrink-0 flex items-center justify-center ${svc.iconBg} ${svc.iconColor}`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-gray-900 font-bold text-lg leading-tight">{svc.title}</h3>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 bg-slate-50 px-3 py-1 rounded-full border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
