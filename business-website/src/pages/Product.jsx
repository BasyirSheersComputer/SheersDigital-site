import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap, Shield, Rocket, Check, Star, Clock,
    Database, BarChart, CloudLightning, RefreshCw,
<<<<<<< HEAD
    CheckCircle, ArrowRight, AlertTriangle, TrendingUp, Smile, Users, User, DollarSign, Award, Target, Sparkles
=======
    CheckCircle, ArrowRight, AlertTriangle, TrendingUp, Smile, Users, User
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Product = () => {
<<<<<<< HEAD
=======
    const dreamOutcomes = [
        "Faster call handling",
        "Higher booking conversions",
        "Zero inconsistency in answers",
        "Lower training cost",
        "Higher guest satisfaction",
        "A modern, AI-enhanced experience",
        "A solution that just works without re-training systems"
    ];

>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
    const coreComponents = [
        {
            icon: Zap,
            title: "The Instant Knowledge Engine (IKE)",
            desc: "AI-driven system that ingests ALL resort documents (room info, pricing, policies, etc.). Agents ask → AI answers instantly with citations.",
<<<<<<< HEAD
            highlight: "No searching. No hesitation. No wrong answers.",
            color: "cyan"
=======
            highlight: "No searching. No hesitation. No wrong answers."
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
        },
        {
            icon: Rocket,
            title: "Conversion Uplift Protocol",
            desc: "Designed specifically to increase bookings by reducing hesitation and providing structured upsell prompts (e.g., 'family suite upgrade available').",
<<<<<<< HEAD
            highlight: "Guaranteed 1% uplift or you don't pay.",
            color: "magenta"
=======
            highlight: "Guaranteed 1% uplift or you don't pay."
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
        },
        {
            icon: Clock,
            title: "The 24-Hour Onboarding Framework",
            desc: "System goes live within 24 hours. Upload docs → Train engine → Validate → Deploy. No IT disruption.",
<<<<<<< HEAD
            highlight: "No retraining in call centre workflows.",
            color: "green"
=======
            highlight: "No retraining in call centre workflows."
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
        },
        {
            icon: Database,
            title: "SOP Harmonization Layer",
            desc: "We convert scattered PDFs, WhatsApps, CSVs, and Google Docs into one unified knowledge base.",
<<<<<<< HEAD
            highlight: "Removes the #1 root cause of inconsistency.",
            color: "cyan"
        },
=======
            highlight: "Removes the #1 root cause of inconsistency."
        },

>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
        {
            icon: BarChart,
            title: "Call-Centre Performance Dashboard",
            desc: "Live visibility on AHT reduction, conversion impact, question categories, and agent performance uplift.",
<<<<<<< HEAD
            highlight: "Procurement LOVES visibility.",
            color: "magenta"
=======
            highlight: "Procurement LOVES visibility."
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
        },
        {
            icon: Shield,
            title: "Hands-Free Success Guarantee",
<<<<<<< HEAD
            desc: "If your call centre doesn't reduce handling time by at least 20% in 30 days, you don't pay.",
            highlight: "Risk reversal is the heart of our offer.",
            color: "green"
        }
    ];

    const stats = [
        { number: "-30%", label: "Call Handling Time", icon: Clock, color: "cyan" },
        { number: "+95%", label: "Answer Accuracy", icon: CheckCircle, color: "green" },
        { number: "24hrs", label: "Setup Time", icon: Rocket, color: "magenta" },
        { number: "RM5.6M+", label: "Annual Value Uplift", icon: DollarSign, color: "green" }
    ];

    const problems = [
        {
            icon: Clock,
            title: "Wasting Time",
            desc: "Your team spends hours on repetitive manual tasks instead of high-value work.",
            impact: "30-45% time loss"
        },
        {
            icon: TrendingUp,
            title: "High Costs",
            desc: "Operational expenses keep climbing every month while efficiency stagnates.",
            impact: "Hidden revenue leaks"
        },
        {
            icon: Rocket,
            title: "Slow Growth",
            desc: "Your business isn't scaling as fast as you'd like due to bottlenecks.",
            impact: "Missed opportunities"
        }
    ];

    const valueDrivers = [
        {
            icon: Clock,
            title: "AHT Reduction",
            before: "6–9 mins",
            after: "-30% AHT",
            impact: "Agents handle 30–45% more calls. Extra answered calls directly increase bookings.",
            value: "RM 3.65M",
            color: "green"
        },
        {
            icon: CheckCircle,
            title: "Accuracy",
            stat: "+95% accuracy with source attribution",
            impact: "Industry data: 2–5% of bookings lost from misinformation. We guarantee +95% accuracy, recovering lost revenue.",
            value: "RM 1.2M – 1.8M",
            color: "cyan"
        },
        {
            icon: TrendingUp,
            title: "AI Upsell",
            stat: "8–12% improvement",
            impact: "Agents skip upselling when they lack details. Resort Genius provides instant answers for spa, upgrades, and activities.",
            value: "RM 300K – 450K",
            color: "magenta"
        },
        {
            icon: Smile,
            title: "Resolution",
            stat: "0.5–1.5% of guest revenue",
            impact: "Faster issue resolution leads to higher guest satisfaction, repeat bookings, and lifetime value.",
            value: "RM 300K – 1.35M",
            color: "green"
        },
        {
            icon: Users,
            title: "Training",
            stat: "6 weeks → 2 weeks",
            impact: "Cost per Agent: RM 5K – 10K",
            value: "RM 100K – 300K",
            color: "cyan"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const StatCard = ({ number, label, icon: Icon, color }) => (
        <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <GlassCard variant={color} style={{ padding: 'var(--space-xl)', textAlign: 'center', height: '100%' }}>
                <Icon size={32} style={{ color: `var(--neon-${color})`, marginBottom: 'var(--space-md)' }} />
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: `var(--neon-${color})`, marginBottom: 'var(--space-xs)', lineHeight: 1 }}>
                    {number}
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', color: 'var(--text-secondary)' }}>
                    {label}
                </div>
            </GlassCard>
        </motion.div>
    );

    return (
        <PageLayout>
            {/* Hero Section - Ultra Premium */}
=======
            desc: "If your call centre doesn’t reduce handling time by at least 20% in 30 days, you don’t pay.",
            highlight: "Risk reversal is the heart of our offer."
        }
    ];

    return (
        <PageLayout>
            {/* 1. Hero Section: Dream Outcome */}
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                        transition={{ duration: 0.8 }}
                        className="page-hero text-center"
                        style={{ marginBottom: 'var(--space-3xl)' }}
                    >
                        <div className="hero-badge" style={{ margin: '0 auto var(--space-md)' }}>
                            <Sparkles size={14} /> <span>The Instant Answer Ops System</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: 'var(--space-md)' }}>
                            100% Correct Information in <span className="text-gradient">1 Second</span>
                        </h1>
                        <p className="page-subtitle" style={{ maxWidth: '900px', margin: '0 auto var(--space-md)', fontSize: 'var(--font-size-lg)' }}>
                            Delivering the right answer to call centre agents in <span className="text-neon-cyan">under 1 second</span> — without searching, training, or workflow changes.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto var(--space-2xl)' }}>
                            ⚡ 24-Hour Setup • 🛡️ Zero Risk Guarantee • 📈 RM 5.6M+ Annual Value
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/contact">
                                <NeonButton variant="primary" size="lg" style={{ padding: '18px 40px' }}>
                                    Book FREE Pilot Demo <ArrowRight size={20} />
                                </NeonButton>
                            </Link>
                            <Link to="/case-study">
                                <NeonButton variant="secondary" size="lg" style={{ padding: '18px 40px' }}>
                                    View Case Study
                                </NeonButton>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)', maxWidth: '1200px', margin: '0 auto' }}
                    >
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} {...stat} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Problems Section - Streamlined */}
            <section className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(255,0,255,0.03), transparent)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ marginBottom: 'var(--space-2xl)' }}
                    >
                        <h2 className="section-title">
                            Are You Facing <span className="text-neon-magenta">These Challenges?</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }}
                    >
                        {problems.map((problem, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <GlassCard variant="magenta" hover style={{ padding: 'var(--space-xl)', height: '100%' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: 'rgba(255, 0, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 'var(--space-lg)',
                                        border: '2px solid rgba(255, 0, 255, 0.3)'
                                    }}>
                                        <problem.icon size={28} style={{ color: 'var(--neon-magenta)' }} />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-sm)', fontWeight: 'bold' }}>{problem.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-md)' }}>
                                        {problem.desc}
                                    </p>
                                    <div style={{ display: 'inline-block', background: 'rgba(255,0,255,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--neon-magenta)', border: '1px solid rgba(255,0,255,0.3)' }}>
                                        ⚠️ {problem.impact}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Grand Slam Offer - Enhanced */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '1100px', margin: '0 auto' }}
                    >
                        <GlassCard variant="gradient" style={{ padding: 'var(--space-3xl)', border: '2px solid var(--neon-magenta)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: -100, right: -100, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,0,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                            <div className="text-center" style={{ marginBottom: 'var(--space-3xl)', position: 'relative' }}>
                                <div className="hero-badge" style={{ margin: '0 auto var(--space-md)', background: 'rgba(255, 0, 255, 0.15)', border: '2px solid var(--neon-magenta)', color: 'var(--neon-magenta)', padding: '8px 20px' }}>
                                    <Star size={16} /> <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold' }}>THE GRAND SLAM OFFER</span>
                                </div>
                                <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--space-lg)', lineHeight: 1.2 }}>
                                    The <span className="text-gradient">Instant Answer</span> Ops System
                                </h2>
                                <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: 'var(--font-size-xl)', lineHeight: 1.8, color: 'var(--text-primary)' }}>
                                    Delivering <strong style={{ color: 'var(--neon-cyan)' }}>100% of the correct information</strong> to call centre agents in <strong style={{ color: 'var(--neon-magenta)' }}>1 second or less</strong> — without searching, training, or workflow changes.
                                </p>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                gap: 'var(--space-lg)',
                                marginBottom: 'var(--space-3xl)',
                                background: 'rgba(0,0,0,0.3)',
                                padding: 'var(--space-2xl)',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {[
                                    { icon: Zap, text: "Faster call handling" },
                                    { icon: TrendingUp, text: "Higher booking conversions" },
                                    { icon: CheckCircle, text: "Zero inconsistency in answers" },
                                    { icon: DollarSign, text: "Lower training cost" },
                                    { icon: Smile, text: "Higher guest satisfaction" },
                                    { icon: Sparkles, text: "A modern, AI-enhanced experience" }
                                ].map((outcome, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-md)', background: 'rgba(0,255,255,0.03)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,255,0.1)' }}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'rgba(0, 255, 255, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid var(--neon-cyan)'
                                        }}>
                                            <outcome.icon size={20} style={{ color: 'var(--neon-cyan)' }} />
                                        </div>
                                        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '600', textAlign: 'center', lineHeight: 1.4 }}>{outcome.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-center">
                                <Link to="/contact">
                                    <NeonButton variant="primary" size="lg" style={{ width: '100%', maxWidth: '320px', justifyContent: 'center', padding: '20px 50px', fontSize: 'var(--font-size-xl)' }}>
                                        BOOK FREE PILOT DEMO <ArrowRight size={24} />
                                    </NeonButton>
                                </Link>
                                <p style={{ marginTop: 'var(--space-md)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                                    🚀 Live in 24 hours • 💯 Risk-Free Guarantee • 🎯 No IT Disruption
                                </p>
=======
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
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Core Components - Visual Grid */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                            <h2 className="section-title">
                                6 Core <span className="text-gradient">Components</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: 'var(--font-size-lg)', textAlign: 'center' }}>
                                The building blocks of the Instant Answer Ops System
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-2xl)' }}>
                            {coreComponents.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <GlassCard variant={item.color} hover style={{ padding: 'var(--space-2xl)', height: '100%', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', top: 10, right: 10, width: '40px', height: '40px', borderRadius: '50%', background: `rgba(${item.color === 'cyan' ? '0,255,255' : item.color === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid var(--neon-${item.color})` }}>
                                            <span style={{ fontSize: '14px', fontWeight: 'bold', color: `var(--neon-${item.color})` }}>{index + 1}</span>
                                        </div>

                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '50%',
                                            background: `rgba(${item.color === 'cyan' ? '0,255,255' : item.color === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 'var(--space-lg)',
                                            border: `2px solid var(--neon-${item.color})`
                                        }}>
                                            <item.icon size={36} style={{ color: `var(--neon-${item.color})` }} />
                                        </div>

                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-md)', lineHeight: 1.3 }}>{item.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.7, fontSize: 'var(--font-size-md)' }}>{item.desc}</p>
                                        <div style={{ padding: 'var(--space-md) var(--space-lg)', background: `rgba(${item.color === 'cyan' ? '0,255,255' : item.color === 'magenta' ? '255,0,255' : '124,252,0'},0.05)`, borderRadius: 'var(--radius-md)', borderLeft: `3px solid var(--neon-${item.color})` }}>
                                            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: '700', color: `var(--neon-${item.color})`, lineHeight: 1.6 }}>✨ {item.highlight}</span>
                                        </div>
                                    </GlassCard>
                                </motion.div>
=======
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
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Business Case - Value Drivers */}
            <section className="section" style={{ background: 'linear-gradient(135deg, rgba(0,255,255,0.03), rgba(124,252,0,0.03))' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <div className="text-center" style={{ marginBottom: 'var(--space-3xl)' }}>
                            <h2 className="section-title">
                                The <span className="text-neon-green">RM 5.6M+</span> Value Story
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: 'var(--font-size-lg)', textAlign: 'center' }}>
                                5 proven value drivers that transform your call centre operations
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
                            {valueDrivers.map((driver, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <GlassCard variant={driver.color} style={{ padding: 'var(--space-2xl)', height: '100%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                            <div style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                background: `rgba(${driver.color === 'cyan' ? '0,255,255' : driver.color === 'magenta' ? '255,0,255' : '124,252,0'},0.15)`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: `2px solid var(--neon-${driver.color})`
                                            }}>
                                                <driver.icon size={26} style={{ color: `var(--neon-${driver.color})` }} />
                                            </div>
                                            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', lineHeight: 1.2 }}>
                                                {driver.title}
                                            </h3>
                                        </div>

                                        {driver.before && (
                                            <div style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-md)', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                                    <span>❌ Without AI:</span>
                                                    <span>{driver.before}</span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: `var(--neon-${driver.color})` }}>
                                                    <span>✅ With System:</span>
                                                    <span>{driver.after}</span>
                                                </div>
                                            </div>
                                        )}

                                        {driver.stat && (
                                            <div style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-md)', background: `rgba(${driver.color === 'cyan' ? '0,255,255' : driver.color === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`, borderRadius: 'var(--radius-sm)', borderLeft: `3px solid var(--neon-${driver.color})` }}>
                                                <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', color: `var(--neon-${driver.color})`, lineHeight: 1.5 }}>{driver.stat}</span>
                                            </div>
                                        )}

                                        <p style={{ fontSize: 'var(--font-size-sm)', lineHeight: 1.6, marginBottom: 'var(--space-lg)', color: 'var(--text-secondary)' }}>
                                            {driver.impact}
                                        </p>

                                        <div style={{ padding: 'var(--space-lg) var(--space-xl)', background: `rgba(${driver.color === 'cyan' ? '0,255,255' : driver.color === 'magenta' ? '255,0,255' : '124,252,0'},0.1)`, borderRadius: 'var(--radius-md)', border: `2px solid var(--neon-${driver.color})`, textAlign: 'center' }}>
                                            <div style={{ fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 'var(--space-sm)', fontWeight: 'bold', color: `var(--neon-${driver.color})` }}>Annual Value</div>
                                            <div style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: '900', color: `var(--neon-${driver.color})`, lineHeight: 1.2 }}>{driver.value}</div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>

                        {/* Total Value Summary */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard variant="gradient" style={{ padding: 'var(--space-3xl)', textAlign: 'center', border: '2px solid var(--neon-green)' }}>
                                <Award size={60} style={{ color: 'var(--neon-green)', marginBottom: 'var(--space-lg)' }} />
                                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--space-md)', fontWeight: 'bold' }}>
                                    Total Conservative Value
                                </h3>
                                <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', color: 'var(--neon-green)', marginBottom: 'var(--space-md)', lineHeight: 1 }}>
                                    RM 5.6M+
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
                                    Annual value uplift for a mid-sized resort operation
                                </p>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA - Guarantee */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <GlassCard variant="gradient" style={{ padding: 'var(--space-3xl)', textAlign: 'center', border: '3px solid var(--neon-cyan)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: -80, left: -80, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', bottom: -80, right: -80, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(124,252,0,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                            <div style={{ position: 'relative' }}>
                                <Shield size={70} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-lg)', display: 'inline-block' }} />
                                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: 'var(--space-lg)', lineHeight: 1.2 }}>
                                    Hands-Free Success Guarantee
                                </h2>
                                <p style={{ fontSize: 'var(--font-size-xl)', lineHeight: 1.8, marginBottom: 'var(--space-2xl)', maxWidth: '700px', margin: '0 auto var(--space-2xl)' }}>
                                    If your call centre doesn't reduce handling time by at least <strong style={{ color: 'var(--neon-green)' }}>20% in 30 days</strong>, you don't pay. Period.
                                </p>

                                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                                    <Link to="/contact">
                                        <NeonButton variant="primary" size="lg" style={{ width: '100%', maxWidth: '350px', justifyContent: 'center', padding: '22px 60px', fontSize: 'var(--font-size-xl)' }}>
                                            Book FREE Pilot Demo
                                        </NeonButton>
                                    </Link>
                                    <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
                                        {[
                                            { icon: Rocket, text: "Live in 24 Hours" },
                                            { icon: Shield, text: "Zero Risk" },
                                            { icon: CheckCircle, text: "No IT Disruption" }
                                        ].map((item, idx) => (
                                            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-secondary)' }}>
                                                <item.icon size={18} style={{ color: 'var(--neon-cyan)' }} />
                                                <span style={{ fontSize: 'var(--font-size-sm)' }}>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
=======
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
>>>>>>> db226f5e3341c0f6784a1425741b4e16ff6feaa9
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Product;
