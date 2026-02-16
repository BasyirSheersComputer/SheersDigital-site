import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Operations Director, Club Med",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            quote: "SheersSoft's Resort Genius platform completely transformed our call center. AHT dropped by 35% in just two weeks, and our agents are more confident than ever.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "CTO, TechFlow Solutions",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            quote: "The team at SheersSoft delivered our corporate portal ahead of schedule and under budget. Their attention to detail and modern design aesthetic is unmatched.",
            rating: 5
        },
        {
            name: "Elena Rodriguez",
            role: "Founder, EcoStay Resorts",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
            quote: "We were struggling with manual booking processes. SheersSoft automated everything. We've seen a 20% increase in direct bookings since launch.",
            rating: 5
        },
        {
            name: "Michael Chang",
            role: "VP of Sales, OmniGroup",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            quote: "Professional, responsive, and incredibly skilled. They didn't just build software; they solved our core business problems.",
            rating: 5
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
                            Client <span className="text-gradient">Stories</span>
                        </h1>
                        <p className="page-subtitle">
                            Don't just take our word for it. Hear from the businesses we've helped transform.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard variant="magenta" hover style={{ padding: 'var(--space-xl)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--space-md)' }}>
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="var(--neon-magenta)" color="var(--neon-magenta)" />
                                        ))}
                                    </div>

                                    <Quote size={32} style={{ color: 'rgba(255,255,255,0.1)', marginBottom: 'var(--space-sm)' }} />

                                    <p style={{ fontSize: 'var(--font-size-lg)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 'var(--space-xl)', flex: 1 }}>
                                        "{t.quote}"
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-lg)' }}>
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--neon-magenta)' }}
                                        />
                                        <div>
                                            <h4 style={{ fontWeight: 'bold', color: 'white' }}>{t.name}</h4>
                                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>{t.role}</p>
                                        </div>
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

export default Testimonials;
