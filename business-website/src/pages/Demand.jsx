import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, TrendingUp, AlertTriangle, Users, BookOpen } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';

const Demand = () => {
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
                            Feasibility Study <span className="text-gradient">Evidence Pack</span>
                        </h1>
                        <p className="page-subtitle">
                            AI Agent for Hotel Call Center Knowledge Retrieval. <br />
                            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>All facts + source list (ranked highest → lowest impact)</span>
                        </p>
                    </motion.div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' }}>

                        {/* 1. Phone bookings remain a major revenue channel */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(0,255,0,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Phone size={32} className="text-neon-green" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>1. Phone bookings remain a major revenue channel</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}>A hotel operator case cited by Revinate reports that <strong>40% of its bookings were completed by phone</strong> (Dream Inn example).</li>
                                        <li>Industry commentary continues to show that <strong>direct voice channels</strong> remain an important booking path for many hotels, often outperforming digital channels in conversion quality.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}><strong>Revinate – Hotel Voice Performance Study</strong> (Dream Inn case with 40% phone bookings).</li>
                                        <li><strong>Industry analyses on voice bookings</strong> summarizing persistent relevance of phone as a high-intent channel.</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 2. Phone calls generate higher revenue */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="cyan" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(0,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <TrendingUp size={32} className="text-neon-cyan" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>2. Phone calls generate higher revenue than online booking engines</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li>According to a published analysis by Simplotel, <strong>phone calls originating from hotel websites generated up to 6× more revenue</strong> than the booking engine for hotels measured in their study.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li><strong>Simplotel (“Calls Can Generate Up to 6x More Revenue Than Bookings Engines”)</strong> — measured comparative revenue.</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 3. AHT benchmarks & operational impact */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(255,0,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <FileText size={32} className="text-neon-magenta" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>3. AHT benchmarks & operational impact</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}>Contact-center industry benchmarks consistently cite an <strong>Average Handle Time (AHT) of ~4–6 minutes</strong> across many customer service sectors.</li>
                                        <li style={{ marginBottom: '8px' }}>AHT is documented as a primary driver of:
                                            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '4px' }}>
                                                <li>agent capacity</li>
                                                <li>cost per contact</li>
                                                <li>queue times</li>
                                            </ul>
                                        </li>
                                        <li>Industry guidance emphasizes that <strong>reducing AHT without reducing quality</strong> is a core operational objective.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}><strong>Sobot – Contact Center Benchmarks Report</strong> (AHT ranges).</li>
                                        <li style={{ marginBottom: '8px' }}><strong>InMoment CX Industry Guidance</strong> (AHT as capacity driver).</li>
                                        <li><strong>Invoca Call Center Performance Guidelines</strong> (balancing AHT vs. service quality).</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 4. Upselling & ancillary revenue benchmarks */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="green" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(0,255,0,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <TrendingUp size={32} className="text-neon-green" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>4. Upselling & ancillary revenue benchmarks in hotels</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>Industry-recognized ranges for upsell revenue contribution:</p>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}><strong>Pre-arrival upsell:</strong> 1.5–3% of revenue</li>
                                        <li style={{ marginBottom: '8px' }}><strong>On-arrival upsell:</strong> 3–6% of revenue</li>
                                        <li style={{ marginBottom: '8px' }}><strong>In-stay upsell:</strong> 0.5–1% of revenue</li>
                                    </ul>
                                    <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>These benchmarks are widely referenced for programs involving structured upselling, digital tools, or specialized training.</p>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li><strong>Hotel Upsell Program Benchmark Guides</strong> (commonly cited % ranges used in revenue-management practice).</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 5. Lost revenue from inconsistent answers */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="red" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(255,0,0,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <AlertTriangle size={32} className="text-neon-red" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>5. Lost revenue from inconsistent answers & booking errors</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}>Hospitality industry guides identify <strong>rate inconsistencies, misquotes, manual data entry errors, and double bookings</strong> as material sources of revenue loss.</li>
                                        <li style={{ marginBottom: '8px' }}>Commonly reported issues include:
                                            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '4px' }}>
                                                <li>incorrect room/rate information</li>
                                                <li>booking errors leading to cancellations or guest dissatisfaction</li>
                                            </ul>
                                        </li>
                                        <li>Academic research on hotel demand and cancellations shows such errors impair:
                                            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '4px' }}>
                                                <li>revenue forecasting</li>
                                                <li>yield optimization</li>
                                                <li>confirmed revenue capture</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}><strong>Guides on Common Hotel Reservation Problems</strong> (lists double bookings, rate mistakes, manual errors).</li>
                                        <li style={{ marginBottom: '8px' }}><strong>Academic papers on hotel cancellation behaviour</strong> (demonstrating revenue impact).</li>
                                        <li><strong>Booking-error analysis literature</strong> (rate misquote effects).</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* 6. High turnover & training cost */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(255,0,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Users size={32} className="text-neon-magenta" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>6. High turnover & training cost in hospitality</h2>
                                </div>

                                <div style={{ marginBottom: 'var(--space-lg)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Facts</h3>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}>Hospitality has one of the <strong>highest turnover rates</strong> of all industries.</li>
                                        <li style={{ marginBottom: '8px' }}>Reported turnover rates (e.g., U.S. accommodation & food services) reach <strong>~86%</strong> in some years.</li>
                                        <li style={{ marginBottom: '8px' }}>High turnover drives:
                                            <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '4px' }}>
                                                <li>increasing training cost</li>
                                                <li>knowledge retention issues</li>
                                                <li>inconsistent service quality</li>
                                            </ul>
                                        </li>
                                        <li>This strengthens the case for automation that reduces onboarding complexity.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', marginBottom: 'var(--space-sm)', color: 'white' }}>Sources</h3>
                                    <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        <li style={{ marginBottom: '8px' }}><strong>Centrical – Hospitality Turnover Insights</strong> (reported ~86% sector turnover).</li>
                                        <li><strong>U.S. Bureau of Labor Statistics (BLS) JOLTS data</strong> — historically validates high turnover in Accommodation & Food Services.</li>
                                    </ol>
                                </div>
                            </GlassCard>
                        </motion.div>

                        {/* Reference Appendix */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="dark" style={{ padding: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <BookOpen size={32} className="text-white" />
                                    </div>
                                    <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>Reference Appendix</h2>
                                </div>

                                <div style={{ overflowX: 'auto' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                                        <thead>
                                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                                <th style={{ textAlign: 'left', padding: '12px', color: 'white' }}>#</th>
                                                <th style={{ textAlign: 'left', padding: '12px', color: 'white' }}>Source Name / Publisher</th>
                                                <th style={{ textAlign: 'left', padding: '12px', color: 'white' }}>Description of Fact Supported</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 1, source: "Revinate – Voice Channel Case Study", desc: "Reports Dream Inn’s 40% phone booking share." },
                                                { id: 2, source: "Industry commentary on voice bookings", desc: "Summaries used across hospitality publications validating importance of phone bookings." },
                                                { id: 3, source: "Simplotel Revenue Comparison Study", desc: "Demonstrates phone calls producing up to 6× revenue of booking engine." },
                                                { id: 4, source: "Sobot – Contact Center Benchmark Report", desc: "Publishes AHT range of ~4–6 minutes." },
                                                { id: 5, source: "InMoment – CX Operations Guide", desc: "Frames AHT as a core efficiency and cost driver." },
                                                { id: 6, source: "Invoca – Call Center KPI Guidelines", desc: "Highlights requirement to balance reduced AHT with service quality." },
                                                { id: 7, source: "Hotel Upsell Benchmark Guides", desc: "Establish industry-used revenue impact ranges for upselling (1.5–6%)." },
                                                { id: 8, source: "Reservation Problem Guides", desc: "Identify manual errors, rate mistakes, double bookings as revenue risks." },
                                                { id: 9, source: "Academic Literature on Hotel Cancellations", desc: "Shows errors materially affect forecasting & revenue management." },
                                                { id: 10, source: "Centrical Hospitality Workforce Analysis", desc: "Cites ~86% turnover rate in accommodation & food services." },
                                                { id: 11, source: "BLS JOLTS (Accommodation & Food Services)", desc: "Confirms historically high turnover levels, validating training load concerns." }
                                            ].map((row) => (
                                                <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                                    <td style={{ padding: '12px' }}>{row.id}</td>
                                                    <td style={{ padding: '12px', fontWeight: 'bold', color: 'white' }}>{row.source}</td>
                                                    <td style={{ padding: '12px' }}>{row.desc}</td>
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

export default Demand;
