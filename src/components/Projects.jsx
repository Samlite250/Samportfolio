import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const projects = [
  {
    id: 1, num: '01',
    title: 'Jetra Services — International Mobility Platform',
    summary: 'The most complete platform for international mobility',
    description: "Features study abroad assistance, visa processing, flight booking, and international accommodation solutions. A comprehensive hub for travelers and students.",
    stack: ['Next.js', 'Supabase', 'Vercel', 'Tailwind CSS'],
    caseStudy: {
      problem: "Traditional mobility services are fragmented, requiring users to jump between multiple agencies for visas, flights, and housing.",
      solution: "A unified Next.js platform that aggregates all mobility services into a single, seamless user experience with Supabase backend management.",
      challenges: "Integrating diverse service flows into a consistent UI while maintaining performance and security for user documents.",
      impact: "Streamlined the mobility process for hundreds of users, providing a one-stop-shop for all international travel needs."
    },
    logo: '/images/jetra_services_logo.png'
  },
  {
    id: 2, num: '02',
    title: 'Gisenyi Gadgets — Premium E-commerce Mobile App',
    summary: 'Shop Smart. Live Better. Your gadget hub.',
    description: "A high-performance React Native e-commerce application featuring real-time inventory, secure checkout, and a specialized admin dashboard for vendors.",
    stack: ['React Native', 'Expo', 'Supabase', 'Vite'],
    caseStudy: {
      problem: "Lack of localized, high-quality mobile e-commerce platforms for electronic gadgets in the region.",
      solution: "Developed a cross-platform mobile app using React Native and Expo, backed by Supabase for real-time data sync and secure authentication.",
      challenges: "Implementing a smooth, performant cart experience on mobile and ensuring real-time order tracking for users.",
      impact: "Provided a modern, scalable shopping experience for the community, complete with a vendor management dashboard."
    },
    logo: '/images/gisenyi_gadgets_logo.png'
  },
  {
    id: 3, num: '03',
    title: 'IPSec DMVPN — 8 Branches, No More MPLS Bill',
    summary: 'Saved the company 40% on WAN costs, kept VoIP working',
    description: "Eight branches on expensive MPLS. I replaced them with DMVPN Phase 3 over internet — spoke-to-spoke tunnels, IKEv2, QoS to keep voice calls clean. The CFO was happy.",
    stack: ['Cisco ISR 4300', 'DMVPN Phase 3', 'IKEv2', 'NHRP', 'QoS DSCP'],
    caseStudy: {
      problem: "MPLS costs eating the WAN budget. VoIP MOS scores around 3.1. Branches couldn't talk to each other without hairpinning through HQ.",
      solution: "DMVPN Phase 3 with NHRP. Spokes build dynamic tunnels directly to each other. IKEv2 encryption. QoS marks voice at DSCP EF, data at AF.",
      challenges: "Getting NHRP to work reliably when spokes are behind NAT. Took some debugging with packet captures to sort out the NHS registration timing.",
      impact: "WAN costs down 40%. VoIP MOS up to 4.3. Honestly one of my favourite deployments."
    }
  },
  {
    id: 4, num: '04',
    title: 'Data Center Refresh — Spine-Leaf Nexus 9K',
    summary: 'Killed STP in the data center. Felt good.',
    description: "Migrated a legacy three-tier DC with spanning tree everywhere to spine-leaf with Nexus 9300s and VXLAN BGP EVPN. Automated VLAN provisioning with Ansible. From 2-day change tickets to 5 minutes.",
    stack: ['Nexus 9300', 'VXLAN', 'BGP EVPN', 'Ansible', '25GbE uplinks'],
    caseStudy: {
      problem: "STP blocking half the links. East-west traffic terrible. Provisioning a new VLAN took a 2-day change ticket.",
      solution: "Spine-leaf with VXLAN EVPN for Layer 2 extension across the fabric. Ansible playbooks for VLAN/VRF provisioning.",
      challenges: "Live migration with zero RPO. Had to bring up the new fabric in parallel, migrate VMs cluster by cluster. More coffee than I care to admit.",
      impact: "East-west throughput tripled. VLAN provisioning: 2 days → 5 minutes. The ops team sent me a thank-you Slack message."
    }
  },
];

const Modal = ({ project, onClose }) => (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden my-6"
    >
      <button onClick={onClose} className="absolute top-4 right-4 z-10 p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-lg transition-colors">
        <X size={16} />
      </button>

      <div className="p-7 border-b border-gray-100">
        <span className="text-primary font-mono text-[10px] tracking-widest uppercase">{project.num} — case study</span>
        <h3 className="text-xl font-bold text-gray-900 mt-1.5 mb-1">{project.title}</h3>
        <p className="text-gray-400 text-sm italic">{project.summary}</p>
      </div>

      <div className="p-7 grid md:grid-cols-2 gap-5">
        {[
          { label: 'The situation', key: 'problem' },
          { label: 'What I did', key: 'solution' },
          { label: 'What was tricky', key: 'challenges' },
          { label: 'End result', key: 'impact' },
        ].map(({ label, key }) => (
          <div key={key}>
            <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-2">{label}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{project.caseStudy[key]}</p>
          </div>
        ))}
      </div>

      <div className="px-7 pb-7">
        <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest mb-2">Stack used</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map(t => (
            <span key={t} className="text-xs font-mono text-primary bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const Projects = () => {
  const [active, setActive] = useState(null);
  React.useEffect(() => { document.body.style.overflow = active ? 'hidden' : 'unset'; }, [active]);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-6">
          <p className="section-label"><span className="w-8 h-px bg-primary inline-block" />04 — Projects</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Things I've <span className="text-gradient">actually built</span>
          </h2>
        </div>
        <p className="text-gray-400 font-mono text-xs mb-12 italic">Click any card to read what really happened</p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setActive(p)}
              className="glass-card p-7 cursor-pointer group hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                {p.logo ? (
                  <img src={p.logo} alt={p.title} className="w-12 h-12 rounded-lg object-contain bg-gray-50 p-1" />
                ) : (
                  <span className="text-5xl font-mono font-black text-gray-100 group-hover:text-primary/10 transition-colors select-none">{p.num}</span>
                )}
                <span className="text-[10px] font-mono text-gray-300 group-hover:text-primary transition-colors pt-1">read more →</span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg mb-1 group-hover:text-primary transition-colors leading-tight">{p.title}</h3>
              <p className="text-gray-400 text-xs italic mb-4">{p.summary}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map(t => (
                  <span key={t} className="text-[10px] font-mono text-gray-400 bg-slate-50 border border-gray-200 px-2 py-0.5 rounded-full">{t}</span>
                ))}
                {p.stack.length > 3 && <span className="text-[10px] font-mono text-gray-300">+{p.stack.length - 3} more</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <Modal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
