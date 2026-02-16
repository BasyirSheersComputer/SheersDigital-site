import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, TrendingUp, AlertTriangle, Users, BookOpen, CheckCircle, XCircle, ArrowRight, Zap, DollarSign, Clock, Target } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

const CaseStudy = () => {
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

    const StatCard = ({ number, label, subtext, color = 'cyan' }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{
                background: `linear-gradient(135deg, rgba(${color === 'green' ? '0,255,0' : color === 'magenta' ? '255,0,255' : color === 'red' ? '255,0,0' : '0,255,255'},0.1), rgba(0,0,0,0.2))`,
                border: `1px solid var(--neon-${color})`,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: `radial-gradient(circle, rgba(${color === 'green' ? '0,255,0' : color === 'magenta' ? '255,0,255' : color === 'red' ? '255,0,0' : '0,255,255'},0.2) 0%, transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: `var(--neon-${color})`, marginBottom: 'var(--space-sm)' }}>
                {number}
            </div>
            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>
                {label}
            </div>
            {subtext && <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>{subtext}</div>}
        </motion.div>
    );

    const ComparisonCard = ({ title, before, after, icon: Icon, variant = 'cyan' }) => (
        <GlassCard variant={variant} style={{ padding: 'var(--space-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                <div style={{ background: `rgba(${variant === 'green' ? '0,255,0' : variant === 'cyan' ? '0,255,255' : '255,0,255'},0.1)`, padding: '12px', borderRadius: '50%' }}>
                    <Icon size={32} className={`text-neon-${variant}`} />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>{title}</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)', marginTop: 'var(--space-lg)' }}>
                <div style={{ background: 'rgba(255,0,0,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,0,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                        <XCircle size={20} style={{ color: 'var(--neon-red)' }} />
                        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: 'var(--neon-red)' }}>Without AI</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{before}</p>
                </div>

                <div style={{ background: 'rgba(0,255,0,0.05)', padding: 'var(--space-lg)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,0,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
                        <CheckCircle size={20} style={{ color: 'var(--neon-green)' }} />
                        <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: 'var(--neon-green)' }}>With AI System</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{after}</p>
                </div>
            </div>
        </GlassCard>
    );

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                        style={{ marginBottom: 'var(--space-3xl)' }}
                    >
                        <div className="hero-badge" style={{ margin: '0 auto var(--space-md)' }}>
                            <Target size={14} /> <span>Evidence-Based Analysis</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Feasibility Study <span className="text-gradient">Evidence Pack</span>
                        </h1>
                        <p className="page-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            AI Agent for Hotel Call Center Knowledge Retrieval<br />
                            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>Industry facts + ranked impact analysis</span>
                        </p>
                    </motion.div>

                    {/* Key Statistics Overview */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)', maxWidth: '1200px', margin: '0 auto var(--space-3xl)' }}
                    >
                        <StatCard number="40%" label="Phone Bookings" subtext="Major revenue channel" color="green" />
                        <StatCard number="6×" label="Revenue Multiplier" subtext="vs. online booking" color="cyan" />
                        <StatCard number="86%" label="Turnover Rate" subtext="Hospitality industry" color="red" />
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>

                        {/* 1. Phone Bookings */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <ComparisonCard
                                title="1. Phone Bookings: A Major Revenue Channel"
                                icon={Phone}
                                variant="green"
                                before="Many hotels underestimate the value of phone bookings, focusing primarily on digital channels"
                                after="40% of bookings completed by phone (Dream Inn case) - phone remains a high-intent, high-conversion channel"
                            />

                            <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-lg)', background: 'rgba(0,255,0,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,0,0.2)' }}>
                                <h4 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-md)', color: 'var(--neon-green)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                    <FileText size={20} /> Key Evidence
                                </h4>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--neon-green)', marginTop: '4px', flexShrink: 0 }} />
                                        <span><strong>Revinate – Hotel Voice Performance Study:</strong> Dream Inn case with 40% phone bookings</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'start', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={16} style={{ color: 'var(--neon-green)', marginTop: '4px', flexShrink: 0 }} />
                                        <span><strong>Industry analyses:</strong> Voice channels outperform digital in conversion quality</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* 2. Revenue Generation */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="cyan" style={{ padding: 'var(--space-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(0,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <DollarSign size={32} className="text-neon-cyan" />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>2. Phone Calls Generate Higher Revenue</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 'var(--space-xl)', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)' }}>
                                        <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)' }}>1×</div>
                                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>Online Booking Engine</div>
                                    </div>

                                    <ArrowRight size={32} style={{ color: 'var(--neon-cyan)' }} />

                                    <div style={{ textAlign: 'center', padding: 'var(--space-lg)', background: 'rgba(0,255,255,0.1)', borderRadius: 'var(--radius-md)', border: '2px solid var(--neon-cyan)' }}>
                                        <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: '900', color: 'var(--neon-cyan)', marginBottom: 'var(--space-xs)' }}>6×</div>
                                        <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>Phone Bookings</div>
                                    </div>
                                </div>

                                <div style={{ padding: 'var(--space-lg)', background: 'rgba(0,255,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,255,0.2)' }}>
                                    <h4 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'var(--neon-cyan)' }}>📊 Source</h4>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <strong>Simplotel Revenue Comparison Study:</strong> Phone calls from hotel websites generated up to 6× more revenue than booking engines
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 3. AHT Benchmarks */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(255,0,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Clock size={32} className="text-neon-magenta" />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>3. AHT Benchmarks & Operational Impact</h3>
                                </div>

                                <div style={{ background: 'rgba(0,0,0,0.2)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                                        <div style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)' }}>Industry Standard AHT</div>
                                        <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: 'var(--neon-magenta)' }}>4–6 minutes</div>
                                    </div>

                                    <div style={{ height: '40px', background: 'linear-gradient(90deg, transparent, var(--neon-magenta), transparent)', borderRadius: 'var(--radius-sm)', position: 'relative', marginBottom: 'var(--space-md)' }}>
                                        <div style={{ position: 'absolute', top: '-25px', left: '25%', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>4 min</div>
                                        <div style={{ position: 'absolute', top: '-25px', right: '25%', fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>6 min</div>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                                    {['Agent Capacity', 'Cost Per Contact', 'Queue Times'].map((metric, idx) => (
                                        <div key={idx} style={{ padding: 'var(--space-md)', background: 'rgba(255,0,255,0.05)', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid rgba(255,0,255,0.2)' }}>
                                            <Zap size={24} style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-xs)' }} />
                                            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold' }}>{metric}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'rgba(255,0,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,255,0.2)' }}>
                                    <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <strong>Sources:</strong> Sobot Contact Center Benchmarks, InMoment CX Guidance, Invoca KPI Guidelines
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 4. Upselling Revenue */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="green" style={{ padding: 'var(--space-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(0,255,0,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <TrendingUp size={32} className="text-neon-green" />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>4. Upselling & Ancillary Revenue Benchmarks</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
                                    {[
                                        { stage: 'Pre-Arrival', range: '1.5–3%', color: '#00ff00' },
                                        { stage: 'On-Arrival', range: '3–6%', color: '#00ffff' },
                                        { stage: 'In-Stay', range: '0.5–1%', color: '#7cfc00' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ position: 'relative', padding: 'var(--space-xl)', background: 'rgba(0,255,0,0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,255,0,0.2)', textAlign: 'center' }}>
                                            <div style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)' }}>{item.stage} Upsell</div>
                                            <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '900', color: item.color, marginBottom: 'var(--space-xs)' }}>
                                                {item.range}
                                            </div>
                                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>of revenue</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'rgba(0,255,0,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,255,0,0.2)' }}>
                                    <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <strong>Source:</strong> Hotel Upsell Program Benchmark Guides (industry-standard ranges for revenue management)
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 5. Lost Revenue Risks */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="red" style={{ padding: 'var(--space-2xl)', border: '2px solid var(--neon-red)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(255,0,0,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <AlertTriangle size={32} className="text-neon-red" />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>5. Lost Revenue from Errors & Inconsistency</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                                    {[
                                        { icon: '❌', label: 'Rate Inconsistencies' },
                                        { icon: '⚠️', label: 'Manual Entry Errors' },
                                        { icon: '🔄', label: 'Double Bookings' },
                                        { icon: '📉', label: 'Revenue Forecasting Issues' }
                                    ].map((risk, idx) => (
                                        <div key={idx} style={{ padding: 'var(--space-lg)', background: 'rgba(255,0,0,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,0,0.3)', textAlign: 'center' }}>
                                            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>{risk.icon}</div>
                                            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: 'var(--neon-red)' }}>{risk.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ padding: 'var(--space-lg)', background: 'rgba(255,0,0,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,0,0.3)' }}>
                                    <h4 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-md)', color: 'var(--neon-red)' }}>Impact on Business</h4>
                                    <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                        <li>Incorrect room/rate information leading to cancellations</li>
                                        <li>Guest dissatisfaction from booking errors</li>
                                        <li>Impaired yield optimization and revenue capture</li>
                                    </ul>
                                </div>

                                <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'rgba(255,0,0,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,0,0.2)' }}>
                                    <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <strong>Sources:</strong> Hotel Reservation Problem Guides, Academic Literature on Cancellation Behavior, Booking-Error Analysis
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 6. Turnover & Training Costs */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(255,0,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Users size={32} className="text-neon-magenta" />
                                    </div>
                                    <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>6. High Turnover & Training Costs</h3>
                                </div>

                                <div style={{ textAlign: 'center', padding: 'var(--space-2xl)', background: 'rgba(255,0,255,0.1)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-xl)', border: '2px solid var(--neon-magenta)' }}>
                                    <div style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)' }}>Hospitality Industry Turnover Rate</div>
                                    <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', color: 'var(--neon-magenta)' }}>~86%</div>
                                    <div style={{ fontSize: 'var(--font-size-md)', color: 'var(--neon-magenta)', marginTop: 'var(--space-sm)' }}>One of the highest across all industries</div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
                                    {[
                                        { icon: '💰', label: 'Increasing Training Costs', impact: 'High' },
                                        { icon: '🧠', label: 'Knowledge Retention Issues', impact: 'Critical' },
                                        { icon: '📊', label: 'Inconsistent Service Quality', impact: 'High' }
                                    ].map((item, idx) => (
                                        <div key={idx} style={{ padding: 'var(--space-lg)', background: 'rgba(255,0,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,255,0.2)' }}>
                                            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)', textAlign: 'center' }}>{item.icon}</div>
                                            <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', textAlign: 'center', marginBottom: 'var(--space-xs)' }}>{item.label}</div>
                                            <div style={{ fontSize: 'var(--font-size-xs)', textAlign: 'center', color: 'var(--neon-magenta)' }}>Impact: {item.impact}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ padding: 'var(--space-lg)', background: 'rgba(0,255,0,0.1)', borderRadius: 'var(--radius-md)', border: '1px solid var(--neon-green)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                        <CheckCircle size={20} style={{ color: 'var(--neon-green)' }} />
                                        <strong style={{ color: 'var(--neon-green)' }}>Automation Solution</strong>
                                    </div>
                                    <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        AI systems reduce onboarding complexity and maintain consistent knowledge delivery regardless of staff turnover
                                    </p>
                                </div>

                                <div style={{ marginTop: 'var(--space-lg)', padding: 'var(--space-md)', background: 'rgba(255,0,255,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,0,255,0.2)' }}>
                                    <p style={{ margin: 0, fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                        <strong>Sources:</strong> Centrical Hospitality Turnover Insights, U.S. Bureau of Labor Statistics (BLS) JOLTS Data
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* Reference Appendix */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="dark" style={{ padding: 'var(--space-2xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <BookOpen size={32} className="text-white" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', margin: 0 }}>Reference Appendix</h2>
                                </div>

                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)' }}>
                                                <th style={{ textAlign: 'left', padding: '16px 12px', color: 'white', fontWeight: 'bold' }}>#</th>
                                                <th style={{ textAlign: 'left', padding: '16px 12px', color: 'white', fontWeight: 'bold' }}>Source Name / Publisher</th>
                                                <th style={{ textAlign: 'left', padding: '16px 12px', color: 'white', fontWeight: 'bold' }}>Description of Fact Supported</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 1, source: "Revinate – Voice Channel Case Study", desc: "Reports Dream Inn's 40% phone booking share." },
                                                { id: 2, source: "Industry commentary on voice bookings", desc: "Summaries validating importance of phone bookings." },
                                                { id: 3, source: "Simplotel Revenue Comparison Study", desc: "Phone calls producing up to 6× revenue of booking engine." },
                                                { id: 4, source: "Sobot – Contact Center Benchmark Report", desc: "Publishes AHT range of ~4–6 minutes." },
                                                { id: 5, source: "InMoment – CX Operations Guide", desc: "Frames AHT as core efficiency and cost driver." },
                                                { id: 6, source: "Invoca – Call Center KPI Guidelines", desc: "Balance reduced AHT with service quality." },
                                                { id: 7, source: "Hotel Upsell Benchmark Guides", desc: "Revenue impact ranges for upselling (1.5–6%)." },
                                                { id: 8, source: "Reservation Problem Guides", desc: "Manual errors, rate mistakes, double bookings." },
                                                { id: 9, source: "Academic Literature on Hotel Cancellations", desc: "Errors affect forecasting & revenue management." },
                                                { id: 10, source: "Centrical Hospitality Workforce Analysis", desc: "~86% turnover rate in accommodation sector." },
                                                { id: 11, source: "BLS JOLTS (Accommodation & Food)", desc: "Validates high turnover levels historically." }
                                            ].map((row) => (
                                                <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <td style={{ padding: '14px 12px', fontWeight: 'bold', color: 'var(--neon-cyan)' }}>{row.id}</td>
                                                    <td style={{ padding: '14px 12px', fontWeight: 'bold', color: 'white' }}>{row.source}</td>
                                                    <td style={{ padding: '14px 12px', lineHeight: 1.6 }}>{row.desc}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </GlassCard>
                        </motion.div>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default CaseStudy;
