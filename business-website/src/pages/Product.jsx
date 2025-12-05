import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Shield, Rocket, Check, Star, Clock,
    Database, BarChart, CloudLightning, RefreshCw,
    CheckCircle, ArrowRight, AlertTriangle, TrendingUp, Smile, Users, User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Product = () => {
    const dreamOutcomes = [
        "Faster call handling",
        "Higher booking conversions",
        "Zero inconsistency in answers",
        "Lower training cost",
        "Higher guest satisfaction",
        "A modern, AI-enhanced experience",
        "A solution that just works without re-training systems"
    ];

    const coreComponents = [
        {
            icon: Zap,
            title: "The Instant Knowledge Engine (IKE)",
            desc: "AI-driven system that ingests ALL resort documents (room info, pricing, policies, etc.). Agents ask → AI answers instantly with citations.",
            highlight: "No searching. No hesitation. No wrong answers."
        },
        {
            icon: Rocket,
            title: "Conversion Uplift Protocol",
            desc: "Designed specifically to increase bookings by reducing hesitation and providing structured upsell prompts (e.g., 'family suite upgrade available').",
            highlight: "Guaranteed 1% uplift or you don't pay."
        },
        {
            icon: Clock,
            title: "The 24-Hour Onboarding Framework",
            desc: "System goes live within 24 hours. Upload docs → Train engine → Validate → Deploy. No IT disruption.",
            highlight: "No retraining in call centre workflows."
        },
        {
            icon: Database,
            title: "SOP Harmonization Layer",
            desc: "We convert scattered PDFs, WhatsApps, CSVs, and Google Docs into one unified knowledge base.",
            highlight: "Removes the #1 root cause of inconsistency."
        },

        {
            icon: BarChart,
            title: "Call-Centre Performance Dashboard",
            desc: "Live visibility on AHT reduction, conversion impact, question categories, and agent performance uplift.",
            highlight: "Procurement LOVES visibility."
        },
        {
            icon: Shield,
            title: "Hands-Free Success Guarantee",
            desc: "If your call centre doesn’t reduce handling time by at least 20% in 30 days, you don’t pay.",
            highlight: "Risk reversal is the heart of our offer."
        }
    ];

    return (
        <PageLayout>
            {/* 1. Hero Section: Dream Outcome */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <div className="hero-badge" style={{ margin: '0 auto var(--space-md)' }}>
                            <Star size={14} /> <span>The Grand Slam Offer</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                            The <span className="text-gradient">Instant Answer</span> Ops System
                        </h1>
                        <p className="page-subtitle" style={{ maxWidth: '900px', margin: '0 auto var(--space-xl)' }}>
                            Delivering <span className="text-neon-cyan">100% of the correct information</span> to call centre agents in <span className="text-neon-magenta">1 second or less</span> — without searching, training, or workflow changes.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
                            {dreamOutcomes.map((outcome, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '50px' }}>
                                    <CheckCircle size={16} style={{ color: 'var(--neon-green)' }} />
                                    <span style={{ fontSize: 'var(--font-size-sm)' }}>{outcome}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact">
                            <NeonButton variant="primary" size="lg">
                                Book a Pilot Demo <ArrowRight size={20} />
                            </NeonButton>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. The Problem (The Shift) */}
            <section className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,0,255,0.05), transparent)' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 className="section-title text-center">
                            The <span className="text-neon-magenta">Operational Knowledge Retrieval</span> Bottleneck
                        </h2>
                        <GlassCard variant="magenta" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
                            <p style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-lg)' }}>
                                How often do your agents say <em style={{ color: 'var(--neon-magenta)' }}>"Hang on, let me check that"</em>?
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)', textAlign: 'left' }}>
                                <div>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                                        <AlertTriangle size={24} className="text-neon-magenta" /> The Old Way
                                    </h3>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', color: 'var(--text-secondary)' }}>
                                        <li>❌ Searching through scattered PDFs</li>
                                        <li>❌ Asking in WhatsApp groups</li>
                                        <li>❌ Guessing answers (inconsistency)</li>
                                        <li>❌ Long hold times for guests</li>
                                        <li>❌ Missed upsell opportunities</li>
                                    </ul>
                                </div>
                                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: 'var(--space-xl)' }}>
                                    <h3 style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                                        <Zap size={24} className="text-neon-cyan" /> The New Way
                                    </h3>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', color: 'var(--text-primary)' }}>
                                        <li>✅ <strong>Instant Answers</strong> (under 1 sec)</li>
                                        <li>✅ <strong>100% Accuracy</strong> from SOPs</li>
                                        <li>✅ <strong>Auto-Seasonal</strong> Adjustments</li>
                                        <li>✅ <strong>Zero Hesitation</strong></li>
                                        <li>✅ <strong>Confidence</strong> to Upsell</li>
                                    </ul>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Components (The Solution) */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            7 Core Components of the <span className="text-gradient">System</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)' }}>
                            {coreComponents.map((item, index) => (
                                <GlassCard key={index} variant="cyan" hover style={{ padding: 'var(--space-xl)' }}>
                                    <item.icon size={40} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)' }} />
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>{item.desc}</p>
                                    <div style={{ padding: 'var(--space-sm)', background: 'rgba(0, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', borderLeft: '2px solid var(--neon-cyan)' }}>
                                        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--neon-cyan)' }}>{item.highlight}</span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI Agent Feature */}
            <div style={{ marginBottom: 'var(--space-3xl)' }}>
                <GlassCard variant="cyan" style={{ padding: 'var(--space-2xl)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,255,255,0.1)', padding: '6px 12px', borderRadius: '20px', color: 'var(--neon-cyan)', fontSize: '14px', fontWeight: 'bold', marginBottom: 'var(--space-md)' }}>
                                <Zap size={16} /> NEW FEATURE
                            </div>
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>
                                Meet Your New <span className="text-gradient">AI Agent</span>
                            </h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>
                                Not just a chatbot. A fully autonomous agent that understands context, retrieves accurate knowledge instantly, and handles complex guest inquiries with human-like precision.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={20} className="text-neon-cyan" />
                                    <span>Instant Knowledge Retrieval from your documents</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={20} className="text-neon-cyan" />
                                    <span>24/7 Availability with zero wait time</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={20} className="text-neon-cyan" />
                                    <span>Seamlessly hands off to humans when needed</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <GlassCard variant="dark" style={{ padding: 'var(--space-lg)', border: '1px solid var(--neon-cyan)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--neon-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Zap size={24} color="black" />
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '12px', borderTopLeftRadius: 0, flex: 1 }}>
                                        <p style={{ fontSize: '14px' }}>Hello! I'm your AI Resort Assistant. How can I help you with your booking today?</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'flex-end' }}>
                                    <div style={{ background: 'rgba(0,255,255,0.1)', padding: '12px', borderRadius: '12px', borderTopRightRadius: 0, maxWidth: '80%', border: '1px solid var(--neon-cyan)' }}>
                                        <p style={{ fontSize: '14px', color: 'var(--neon-cyan)' }}>Do you have any ocean view suites available for next weekend?</p>
                                    </div>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <User size={24} color="white" />
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* 4. Business Case (ROI) */}
            <section className="section" style={{ background: 'linear-gradient(135deg, rgba(0,255,255,0.05), rgba(124,252,0,0.05))' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            The <span className="text-neon-green">Hidden Revenue Leaks</span> in Your Operations
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)' }}>

                            {/* Driver 1 */}
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <Clock size={32} className="text-neon-green" />
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>
                                        Value Driver 1: AHT Reduction
                                    </h3>
                                </div>
                                <div style={{ marginBottom: 'var(--space-md)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <span>Without AI:</span>
                                        <span>AHT ≈ 6–9 mins</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                        <span>With Resort Genius:</span>
                                        <span>AHT -30%</span>
                                    </div>
                                    <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                                        Agents handle <strong>30–45% more calls</strong>. Extra answered calls directly increase bookings.
                                    </p>
                                </div>
                                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 0, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Annual Uplift</div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '900', color: 'var(--neon-green)' }}>RM 3,650,000</div>
                                </div>
                            </GlassCard>

                            {/* Driver 2 */}
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <CheckCircle size={32} className="text-neon-green" />
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>
                                        Value Driver 2: Accuracy
                                    </h3>
                                </div>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                                    Industry data: 2–5% of bookings lost from misinformation (wrong rates, availability, facilities).
                                </p>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)' }}>
                                    We guarantee <strong>+95% accuracy</strong> with source attribution, recovering lost revenue.
                                </p>
                                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 0, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Recovered Revenue</div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '900', color: 'var(--neon-green)' }}>RM 1.2M – 1.8M</div>
                                </div>
                            </GlassCard>

                            {/* Driver 3 */}
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <TrendingUp size={32} className="text-neon-green" />
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>
                                        Value Driver 3: AI Upsell
                                    </h3>
                                </div>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                                    Agents skip upselling when they lack details. Resort Genius provides instant answers for spa, upgrades, and activities.
                                </p>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)' }}>
                                    Upsell lift benchmark: <strong>8–12% improvement</strong>.
                                </p>
                                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 0, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Upsell Uplift</div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '900', color: 'var(--neon-green)' }}>RM 300K – 450K</div>
                                </div>
                            </GlassCard>

                            {/* Driver 4 */}
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <Smile size={32} className="text-neon-green" />
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>
                                        Value Driver 4: Resolution
                                    </h3>
                                </div>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                                    Faster issue resolution leads to higher guest satisfaction, repeat bookings, and lifetime value.
                                </p>
                                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)' }}>
                                    Impact typically <strong>0.5–1.5% of guest revenue</strong>.
                                </p>
                                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 0, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Return Stays Uplift</div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '900', color: 'var(--neon-green)' }}>RM 300K – 1.35M</div>
                                </div>
                            </GlassCard>

                            {/* Driver 5 */}
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                                    <Users size={32} className="text-neon-green" />
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>
                                        Value Driver 5: Training
                                    </h3>
                                </div>
                                <div style={{ marginBottom: 'var(--space-md)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <span>Training Time:</span>
                                        <span>6 weeks → 2 weeks</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-md)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <span>Cost per Agent:</span>
                                        <span>RM 5K – 10K</span>
                                    </div>
                                </div>
                                <div style={{ padding: 'var(--space-md)', background: 'rgba(0, 255, 0, 0.1)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Cost Savings</div>
                                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '900', color: 'var(--neon-green)' }}>RM 100K – 300K</div>
                                </div>
                            </GlassCard>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Guarantee & CTA */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <GlassCard variant="gradient" style={{ padding: 'var(--space-3xl)', textAlign: 'center', border: '2px solid var(--neon-cyan)' }}>
                            <Shield size={60} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)', display: 'inline-block' }} />
                            <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '900', marginBottom: 'var(--space-md)' }}>
                                Hands-Free Success Guarantee
                            </h2>
                            <p style={{ fontSize: 'var(--font-size-xl)', lineHeight: 1.6, marginBottom: 'var(--space-2xl)' }}>
                                If your call centre doesn’t reduce handling time by at least <strong className="text-neon-green">20% in 30 days</strong>, you don’t pay.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                                <Link to="/contact">
                                    <NeonButton variant="primary" size="lg" style={{ minWidth: '300px', justifyContent: 'center' }}>
                                        Book a Pilot Demo
                                    </NeonButton>
                                </Link>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Risk-Free Pilot • 24-Hour Setup • No IT Disruption
                                </p>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Product;
