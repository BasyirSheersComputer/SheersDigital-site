import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            desc: 'Custom websites and web applications built with modern technologies.',
            features: ['React & Next.js', 'Responsive Design', 'SEO Optimization', 'Performance Tuning']
        },
        {
            icon: Smartphone,
            title: 'Mobile Apps',
            desc: 'Native and cross-platform mobile applications for iOS and Android.',
            features: ['React Native', 'iOS & Android', 'App Store Launch', 'Push Notifications']
        },
        {
            icon: Database,
            title: 'Backend Systems',
            desc: 'Robust and scalable backend architectures to power your applications.',
            features: ['API Development', 'Database Design', 'Cloud Infrastructure', 'Security Audits']
        },
        {
            icon: Code,
            title: 'Custom Software',
            desc: 'Tailored software solutions to solve your unique business challenges.',
            features: ['Automation Tools', 'Internal Dashboards', 'Legacy Migration', 'System Integration']
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
                            Our <span className="text-gradient">Services</span>
                        </h1>
                        <p className="page-subtitle">
                            Comprehensive digital solutions to help your business thrive in the modern age.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard variant="cyan" hover style={{ padding: 'var(--space-xl)', height: '100%' }}>
                                    <service.icon size={50} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)' }} />
                                    <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{service.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>{service.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                                        {service.features.map((feature, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                                <div style={{ background: 'rgba(0, 255, 255, 0.1)', borderRadius: '50%', padding: '2px' }}>
                                                    <Check size={14} style={{ color: 'var(--neon-cyan)' }} />
                                                </div>
                                                <span style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/contact">
                                        <NeonButton variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                                            Learn More <ArrowRight size={16} />
                                        </NeonButton>
                                    </Link>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {/* Process */}
                    <div style={{ marginBottom: 'var(--space-3xl)' }}>
                        <h2 className="section-title text-center">How We Work</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
                            {[
                                { step: '01', title: 'Discovery', desc: 'We learn about your business goals and challenges.' },
                                { step: '02', title: 'Strategy', desc: 'We design a tailored roadmap for your success.' },
                                { step: '03', title: 'Development', desc: 'We build your solution using agile methodologies.' },
                                { step: '04', title: 'Launch', desc: 'We deploy and monitor your new digital asset.' }
                            ].map((item, index) => (
                                <GlassCard key={index} variant="gradient" style={{ padding: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{
                                        position: 'absolute', top: '-20px', right: '-20px', fontSize: '120px',
                                        fontWeight: '900', color: 'rgba(255,255,255,0.03)', zIndex: 0
                                    }}>
                                        {item.step}
                                    </div>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <div style={{ color: 'var(--neon-green)', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>Step {item.step}</div>
                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center' }}>
                        <GlassCard variant="magenta" style={{ padding: 'var(--space-3xl)', maxWidth: '900px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', marginBottom: 'var(--space-md)' }}>
                                Need a Custom Solution?
                            </h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                                We specialize in solving complex business problems with technology. Let's discuss your specific needs.
                            </p>
                            <Link to="/contact">
                                <NeonButton variant="primary" size="lg">
                                    Book a Strategy Call
                                </NeonButton>
                            </Link>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Services;
