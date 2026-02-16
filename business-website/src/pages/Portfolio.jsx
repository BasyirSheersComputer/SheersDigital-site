import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layout, Database, ArrowRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Resort Genius",
            category: "AI-Powered Operations Platform",
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
            description: "An intelligent knowledge retrieval system for resort call centers. Reduces AHT by 30% and ensures 100% answer accuracy.",
            tech: ["React", "Node.js", "OpenAI API", "Vector DB"],
            link: "#"
        },
        {
            title: "SheersSoft Corporate",
            category: "Modern Corporate Website",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            description: "A high-performance, neon-cyberpunk styled corporate website showcasing digital transformation services.",
            tech: ["React", "Framer Motion", "Vite", "Tailwind"],
            link: "#"
        },
        {
            title: "E-Commerce Analytics Dashboard",
            category: "Data Visualization",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            description: "Real-time analytics dashboard for tracking sales, inventory, and customer behavior for a retail giant.",
            tech: ["Vue.js", "D3.js", "Firebase", "AWS"],
            link: "#"
        }
    ];

    return (
        <PageLayout>
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <h1 className="page-title">
                            Our <span className="text-gradient">Work</span>
                        </h1>
                        <p className="page-subtitle">
                            Showcasing our best digital solutions and success stories.
                        </p>
                    </motion.div>

                    <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard variant="cyan" hover style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            className="project-image"
                                        />
                                        <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', color: 'var(--neon-cyan)', border: '1px solid var(--neon-cyan)' }}>
                                            {project.category}
                                        </div>
                                    </div>
                                    <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{project.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', flex: 1 }}>{project.description}</p>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-lg)' }}>
                                            {project.tech.map((t, i) => (
                                                <span key={i} style={{ fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', color: 'var(--text-primary)' }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <NeonButton variant="secondary" size="sm" style={{ width: '100%', justifyContent: 'center' }}>
                                            View Case Study <ArrowRight size={16} />
                                        </NeonButton>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Portfolio;
