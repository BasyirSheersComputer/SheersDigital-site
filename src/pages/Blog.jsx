import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Blog = () => {
    const posts = [
        {
            title: "The Future of Call Centers: AI vs Human Agents",
            excerpt: "Why the best approach isn't replacement, but augmentation. How AI tools like Resort Genius are empowering agents to be superhumans.",
            date: "Dec 12, 2024",
            author: "M. Hafiz",
            category: "AI & Automation",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "5 Signs Your Business Needs Digital Transformation",
            excerpt: "Are you still using spreadsheets for everything? Here are the critical warning signs that your manual processes are killing your growth.",
            date: "Dec 05, 2024",
            author: "A. Basyir",
            category: "Business Strategy",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Why Speed is the New Currency of Customer Service",
            excerpt: "In the age of instant gratification, a 1-minute wait time is too long. Learn how to deliver instant answers without sacrificing quality.",
            date: "Nov 28, 2024",
            author: "SheersSoft Team",
            category: "Customer Experience",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
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
                            Latest <span className="text-gradient">Insights</span>
                        </h1>
                        <p className="page-subtitle">
                            Thoughts, trends, and strategies on technology and business growth.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard variant="cyan" hover style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            className="blog-image"
                                        />
                                    </div>
                                    <div style={{ padding: 'var(--space-lg)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: 'var(--space-md)', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {post.date}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><User size={12} /> {post.author}</span>
                                        </div>

                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{post.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', flex: 1, lineHeight: 1.6 }}>{post.excerpt}</p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                            <span style={{ fontSize: '12px', color: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Tag size={12} /> {post.category}
                                            </span>
                                            <NeonButton variant="link" size="sm">
                                                Read More <ArrowRight size={16} />
                                            </NeonButton>
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

export default Blog;
