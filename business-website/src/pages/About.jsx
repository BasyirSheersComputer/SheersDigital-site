import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Shield, Zap, TrendingUp, Layers, Brain, Briefcase, CheckCircle, Star, Rocket, Code, Database, Building, FileText, MapPin, Hash } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

const About = () => {
    const missionFocus = [
        "Deliver high-quality custom software and AI-powered applications.",
        "Foster strong client partnerships built on trust and transparency.",
        "Continuously innovate to stay ahead in the digital technology landmark."
    ];

    const visionGoals = [
        "Market expansion across Malaysia",
        "Solution portfolio enhancement",
        "Strategic partnerships",
        "International market entry (Southeast Asia)"
    ];

    const impactGoals = [
        { icon: TrendingUp, text: "Help businesses achieve measurable operational efficiency." },
        { icon: Users, text: "Enhance end-user experiences through intuitive and accessible platforms." },
        { icon: Globe, text: "Drive economic growth by enabling digital transformation across industries." }
    ];

    const corePillars = [
        {
            icon: Layers,
            title: "Systems Architecture",
            desc: "Hands-on engineering across UI development, SIT/UAT, and system optimization—designing high-performance, reliable, and future-ready architectures.",
            badge: "Engineering Excellence"
        },
        {
            icon: Brain,
            title: "Strategic Acumen",
            desc: "Real-world sales experience that sharpened my negotiation skills, deepened my empathy, and strengthened my ability to craft high-impact business strategies.",
            badge: "Strategic Thinking"
        },
        {
            icon: Briefcase,
            title: "Financial & Risk Strategy",
            desc: "A high-conviction decision-making mindset shaped through analysing financial statements and managing a fully leveraged, 100% equity portfolio.",
            badge: "Risk Management"
        }
    ];

    const stats = [
        { number: "Top 5%", label: "Analytical Capability", icon: Brain },
        { number: "2025", label: "Established", icon: Star }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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

    const StatCard = ({ number, label, icon: Icon, color = 'cyan' }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{
                background: `linear-gradient(135deg, rgba(${color === 'green' ? '124,252,0' : color === 'magenta' ? '255,0,255' : '0,255,255'},0.1), rgba(0,0,0,0.2))`,
                border: `1px solid var(--neon-${color})`,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                textAlign: 'center'
            }}
        >
            <Icon size={32} style={{ color: `var(--neon-${color})`, marginBottom: 'var(--space-md)' }} />
            <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: `var(--neon-${color})`, marginBottom: 'var(--space-xs)' }}>
                {number}
            </div>
            <div style={{ fontSize: 'var(--font-size-md)', fontWeight: '600', color: 'var(--text-secondary)' }}>
                {label}
            </div>
        </motion.div>
    );

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="page-hero text-center"
                        style={{ marginBottom: 'var(--space-3xl)' }}
                    >
                        <div className="hero-badge" style={{ margin: '0 auto var(--space-md)' }}>
                            <Award size={14} /> <span>About Us</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            About <span className="text-gradient">SheersSoft</span>
                        </h1>
                        <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            We create innovative, reliable, and scalable software solutions that help businesses grow.
                        </p>
                    </motion.div>

                    {/* Key Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-xl)', maxWidth: '1000px', margin: '0 auto var(--space-3xl)' }}
                    >
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} {...stat} color={idx === 0 ? 'cyan' : idx === 1 ? 'magenta' : 'green'} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ marginBottom: 'var(--space-3xl)' }}
                    >
                        {/* Profile Card */}
                        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-3xl)' }}>
                            <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)', maxWidth: '1000px', margin: '0 auto' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 'var(--space-2xl)', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ marginBottom: 'var(--space-lg)' }}>
                                            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'var(--space-xs)', fontWeight: '900' }}>AHMAD BASYIR BIN AZAHARI</h2>
                                            <p style={{ color: 'var(--neon-cyan)', fontWeight: '600', letterSpacing: '1.5px', fontSize: 'var(--font-size-lg)' }}>MANAGING DIRECTOR</p>
                                            <div style={{ display: 'inline-block', background: 'rgba(0,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', marginTop: 'var(--space-sm)' }}>
                                                <span style={{ color: 'var(--neon-cyan)', fontSize: 'var(--font-size-sm)' }}>📅 Established: 22 July 2025</span>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                                            I built my career by mastering one thing: <strong style={{ color: 'var(--text-primary)' }}>transforming complex, unstructured challenges into clear, scalable systems</strong> that produce measurable results. Backed by a <strong style={{ color: 'var(--neon-cyan)' }}>Top 5% analytical capability</strong>, I became the person companies turn to when the problems are ambiguous and the stakes are critical.
                                        </p>
                                    </div>

                                    <div style={{
                                        background: 'linear-gradient(135deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))',
                                        padding: 'var(--space-xl)',
                                        borderRadius: 'var(--radius-lg)',
                                        minWidth: '200px',
                                        textAlign: 'center'
                                    }}>
                                        <Rocket size={64} style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-md)' }} />
                                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>Problem Solver</div>
                                    </div>
                                </div>

                                <div style={{
                                    marginTop: 'var(--space-xl)',
                                    borderLeft: '4px solid var(--neon-magenta)',
                                    paddingLeft: 'var(--space-lg)',
                                    background: 'linear-gradient(90deg, rgba(255,0,255,0.15) 0%, transparent 100%)',
                                    padding: 'var(--space-lg)'
                                }}>
                                    <p style={{ fontSize: 'var(--font-size-xl)', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: 'var(--space-sm)' }}>
                                        "I don't just solve problems.
                                    </p>
                                    <p style={{ fontSize: 'var(--font-size-xl)', fontStyle: 'italic', fontWeight: 'bold' }}>
                                        <span className="text-neon-magenta">I engineer systems that prevent them."</span>
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* Who We Are & Company Details */}
                        <motion.div variants={itemVariants} style={{ marginBottom: 'var(--space-3xl)' }}>
                            <div style={{
                                position: 'relative',
                                background: 'rgba(10, 10, 10, 0.6)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 'var(--radius-xl)',
                                padding: 'var(--space-2xl)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                overflow: 'hidden',
                                maxWidth: '1000px',
                                margin: '0 auto'
                            }}>
                                {/* Top Gradient Line */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta))',
                                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                                }} />

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3xl)', alignItems: 'start' }}>
                                    {/* Who We Are - Left Column */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                            <div style={{ padding: 'var(--space-sm)', background: 'rgba(0,255,255,0.1)', borderRadius: '50%' }}>
                                                <Users size={24} style={{ color: 'var(--neon-cyan)' }} />
                                            </div>
                                            <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', margin: 0, color: 'var(--text-primary)' }}>Who We Are</h3>
                                        </div>

                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)', fontSize: 'var(--font-size-lg)' }}>
                                            <strong style={{ color: 'var(--text-primary)' }}>Sheers Software Sdn. Bhd.</strong> is a leading software development company committed to delivering innovative and reliable digital solutions. Our team specializes in <strong style={{ color: 'var(--neon-cyan)' }}>custom software</strong>, <strong style={{ color: 'var(--neon-cyan)' }}>AI-powered applications</strong>, and <strong style={{ color: 'var(--neon-cyan)' }}>user-friendly platforms</strong> designed to help businesses streamline operations, enhance customer experiences, and achieve sustainable growth.
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'var(--font-size-lg)' }}>
                                            With a focus on quality, security, and client success, we turn ideas into impactful technology solutions that drive real results.
                                        </p>
                                    </div>

                                    {/* Company Details - Right Column */}
                                    <div style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        borderRadius: 'var(--radius-lg)',
                                        padding: 'var(--space-xl)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                            <div style={{ padding: 'var(--space-sm)', background: 'rgba(255,0,255,0.1)', borderRadius: '50%' }}>
                                                <Shield size={24} style={{ color: 'var(--neon-magenta)' }} />
                                            </div>
                                            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0, color: 'var(--neon-magenta)' }}>Company Details</h3>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                            {[
                                                { label: 'Legal Name', value: 'Sheers Software Sdn. Bhd.', icon: Building },
                                                { label: 'Registration No.', value: '202501033756 (1635166-T)', icon: Hash },
                                                { label: 'Structure', value: 'Private Limited Company (Sdn. Bhd.)', icon: FileText },
                                                { label: 'Location', value: 'Malaysia', icon: MapPin },
                                                { label: 'Industry', value: 'Software & Technology Services', icon: Briefcase }
                                            ].map((item, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 'var(--space-md)',
                                                    padding: 'var(--space-sm)',
                                                    borderRadius: 'var(--radius-md)',
                                                    transition: 'background 0.3s ease',
                                                    cursor: 'default'
                                                }}
                                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                                >
                                                    <div style={{ marginTop: '2px' }}>
                                                        <item.icon size={18} style={{ color: 'var(--text-secondary)' }} />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                                                            {item.label}
                                                        </div>
                                                        <div style={{ color: 'var(--text-primary)', fontWeight: '500', fontSize: 'var(--font-size-md)' }}>
                                                            {item.value}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Core Pillars */}
                        <div style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
                            <motion.div variants={itemVariants}>
                                <h2 className="section-title">Core <span className="text-gradient">Pillars</span></h2>
                                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto var(--space-xl)' }}>
                                    Three fundamental strengths that drive our approach to problem-solving
                                </p>
                            </motion.div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
                            {corePillars.map((pillar, index) => (
                                <motion.div key={index} variants={itemVariants}>
                                    <GlassCard hover variant="cyan" style={{ padding: 'var(--space-xl)', height: '100%', position: 'relative', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,255,255,0.1)', padding: '4px 12px', borderRadius: '20px', fontSize: 'var(--font-size-xs)', color: 'var(--neon-cyan)', border: '1px solid rgba(0,255,255,0.3)' }}>
                                            {pillar.badge}
                                        </div>

                                        <div style={{
                                            width: '70px',
                                            height: '70px',
                                            borderRadius: '50%',
                                            background: 'rgba(0, 255, 255, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 'var(--space-lg)',
                                            border: '2px solid rgba(0, 255, 255, 0.3)'
                                        }}>
                                            <pillar.icon size={32} style={{ color: 'var(--neon-cyan)' }} />
                                        </div>

                                        <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', fontWeight: 'bold' }}>
                                            {pillar.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-md)', lineHeight: 1.7 }}>
                                            {pillar.desc}
                                        </p>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            style={{ marginTop: 'var(--space-3xl)', textAlign: 'center', maxWidth: '900px', margin: 'var(--space-3xl) auto 0' }}
                        >
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-xl)' }}>
                                <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                                    Today, I leverage these strengths to help <strong style={{ color: 'var(--neon-magenta)' }}>top-tier executives and founders</strong> streamline operations, eliminate inefficiencies, and build systems that scale with clarity and precision.
                                </p>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard variant="cyan" style={{ padding: 'var(--space-2xl)', height: '100%' }}>
                                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'rgba(0,255,255,0.1)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid var(--neon-cyan)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <Target size={40} style={{ color: 'var(--neon-cyan)' }} />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-2xl)', margin: 0 }}>Our Mission</h2>
                                </div>

                                <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.7, marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                                    To empower businesses with <strong style={{ color: 'var(--neon-cyan)' }}>innovative, reliable, and scalable</strong> software solutions that streamline operations, enhance customer experiences, and drive sustainable growth.
                                </p>

                                <div style={{ background: 'rgba(0,255,255,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,255,0.2)' }}>
                                    <h4 style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>📍 Mission Focus</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                        {missionFocus.map((item, index) => (
                                            <div key={index} style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'start' }}>
                                                <CheckCircle size={18} style={{ color: 'var(--neon-cyan)', marginTop: '2px', flexShrink: 0 }} />
                                                <span style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-2xl)', height: '100%' }}>
                                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,0,255,0.1)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid var(--neon-magenta)',
                                        marginBottom: 'var(--space-md)'
                                    }}>
                                        <Globe size={40} style={{ color: 'var(--neon-magenta)' }} />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-2xl)', margin: 0 }}>Our Vision</h2>
                                </div>

                                <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.7, marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                                    To be a <strong style={{ color: 'var(--neon-magenta)' }}>global leader</strong> in software development, recognized for transforming ideas into impactful digital solutions that redefine business success.
                                </p>

                                <div style={{ background: 'rgba(255,0,255,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,255,0.2)' }}>
                                    <h4 style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-md)', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>🎯 Vision Goals</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                        {visionGoals.map((item, index) => (
                                            <div key={index} style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
                                                <div style={{ minWidth: '10px', height: '10px', borderRadius: '50%', background: 'var(--neon-magenta)', boxShadow: '0 0 12px var(--neon-magenta)' }} />
                                                <span style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Goals */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                        style={{ marginBottom: 'var(--space-2xl)' }}
                    >
                        <h2 className="section-title">Our <span className="text-neon-green">Impact Goals</span></h2>
                        <div style={{ width: '80px', height: '4px', background: 'var(--neon-green)', margin: '0 auto', borderRadius: '2px', boxShadow: '0 0 20px var(--neon-green)' }} />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', maxWidth: '1200px', margin: '0 auto' }}
                    >
                        {impactGoals.map((goal, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <GlassCard variant="green" hover style={{ padding: 'var(--space-xl)', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{
                                        width: '90px',
                                        height: '90px',
                                        borderRadius: '50%',
                                        background: 'rgba(124, 252, 0, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 'var(--space-lg)',
                                        border: '2px solid var(--neon-green)',
                                        boxShadow: '0 0 30px rgba(124, 252, 0, 0.3)'
                                    }}>
                                        <goal.icon size={44} style={{ color: 'var(--neon-green)' }} />
                                    </div>
                                    <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.7, color: 'var(--text-primary)' }}>{goal.text}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default About;
