import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Features — WhatsApp AI, Lead Capture & Revenue Recovery",
    description:
        "AI-powered WhatsApp responder, web chat widget, email handler & revenue recovery dashboard. Built for hotels. Live in 48 hours.",
};

export default function FeaturesPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">FEATURES</span>
                    <h1 style={{ color: "white", marginTop: 12, maxWidth: 700, margin: "12px auto 0" }}>
                        Everything Your Reservation Team Wishes They Had
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 560, margin: "20px auto 32px" }}>
                        One platform. Every channel. Every inquiry captured — automatically.
                    </p>
                    <a href="/book-demo" className="btn btn-primary btn-lg">See Features In Action →</a>
                </div>
            </section>

            {/* WhatsApp AI */}
            <section className="section section-white">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
                        <div>
                            <span className="eyebrow">WHATSAPP AI RESPONDER</span>
                            <h2 style={{ marginTop: 12 }}>Instant Replies on the Channel Your Guests Prefer</h2>
                            <p style={{ color: "var(--color-gray-600)", marginTop: 16, lineHeight: 1.7 }}>
                                90% of Malaysian hotel inquiries come through WhatsApp. Our AI responds in under 30 seconds —
                                in English or Bahasa Malaysia — with warm, natural messages that feel like your best reservation agent.
                            </p>
                            <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                                <li style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                    <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
                                    <span>Responds to room availability, rates, and facility questions</span>
                                </li>
                                <li style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                    <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
                                    <span>Captures guest name, contact, and booking intent</span>
                                </li>
                                <li style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                    <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
                                    <span>Works 24/7 — especially when your desk is closed</span>
                                </li>
                                <li style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                                    <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
                                    <span>Bilingual: English and Bahasa Malaysia</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: "var(--color-gray-50)", borderRadius: 16, padding: 32, display: "flex", justifyContent: "center" }}>
                            <div style={{ maxWidth: 320, width: "100%" }}>
                                <div style={{ background: "#075E54", padding: "12px 16px", borderRadius: "12px 12px 0 0", color: "white", fontWeight: 600, fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                                    💬 Hotel Grand KL
                                </div>
                                <div style={{ background: "#ECE5DD", padding: 16, borderRadius: "0 0 12px 12px", display: "flex", flexDirection: "column", gap: 8 }}>
                                    <div style={{ background: "white", padding: "8px 12px", borderRadius: "0 12px 12px 12px", fontSize: 13, maxWidth: "80%" }}>
                                        Hi, any deluxe rooms for 14-15 Feb? 2 adults
                                    </div>
                                    <div style={{ background: "#DCF8C6", padding: "8px 12px", borderRadius: "12px 0 12px 12px", fontSize: 13, maxWidth: "85%", marginLeft: "auto" }}>
                                        Hello! 😊 Yes, we have Deluxe Rooms available for 14-15 February. RM 280/night including breakfast for 2. Shall I hold a room for you?
                                    </div>
                                    <div style={{ background: "white", padding: "8px 12px", borderRadius: "0 12px 12px 12px", fontSize: 13, maxWidth: "60%" }}>
                                        Yes please! My name is Ahmad
                                    </div>
                                    <div style={{ background: "#DCF8C6", padding: "8px 12px", borderRadius: "12px 0 12px 12px", fontSize: 13, maxWidth: "90%", marginLeft: "auto" }}>
                                        Great, Ahmad! I&apos;ve noted your reservation. Could you share your email so I can send the confirmation? 📧
                                    </div>
                                    <div style={{ fontSize: 11, color: "#666", textAlign: "center", marginTop: 4 }}>
                                        ⚡ Responded in 12 seconds · 11:47 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Web Chat */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">WEB CHAT WIDGET</span>
                    <h2 style={{ marginTop: 12 }}>One Line of Code. Infinite Conversations.</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 560, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        Drop a single script tag on your website. Visitors get instant answers instead of bouncing to Booking.com.
                        Captures leads even when no staff is online.
                    </p>
                    <div style={{ display: "inline-block", background: "var(--color-navy)", padding: "16px 24px", borderRadius: 12, textAlign: "left" }}>
                        <code style={{ color: "var(--color-green)", fontSize: 14, fontFamily: "monospace" }}>
                            &lt;script src=&quot;https://cdn.nocturn.ai/widget.js&quot;&gt;&lt;/script&gt;
                        </code>
                    </div>
                    <p style={{ color: "var(--color-gray-500)", fontSize: "var(--fs-small)", marginTop: 12 }}>
                        That&apos;s it. Your hotel website now has an AI concierge.
                    </p>
                </div>
            </section>

            {/* Email Auto-Handler */}
            <section className="section section-white">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">EMAIL AUTO-HANDLER</span>
                    <h2 style={{ marginTop: 12 }}>Turn Your Inbox Into a Revenue Machine</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>
                        Forward your reservation email to Nocturn AI. It reads, understands, and responds — capturing
                        the lead with full context. No more emails sitting unanswered overnight.
                    </p>
                </div>
            </section>

            {/* Lead Capture CRM */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">LEAD CAPTURE DASHBOARD</span>
                    <h2 style={{ marginTop: 12 }}>Every Inquiry. Captured. Organized. Actionable.</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        See every guest inquiry in one dashboard: name, contact info, channel, intent, timestamp.
                        Filter by date, channel, or status. Export to Excel. Your reservation team starts every morning informed.
                    </p>
                    <div style={{ background: "white", borderRadius: 16, boxShadow: "var(--shadow-card)", overflow: "hidden", maxWidth: 700, margin: "0 auto" }}>
                        <div style={{ padding: "12px 20px", background: "var(--color-gray-50)", borderBottom: "1px solid var(--color-gray-200)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontWeight: 700, fontSize: 14 }}>📊 Lead Pipeline — Today</span>
                            <span className="badge badge-green">12 new leads</span>
                        </div>
                        <div style={{ padding: 0 }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                                <thead>
                                    <tr style={{ background: "var(--color-gray-50)" }}>
                                        <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600 }}>Guest</th>
                                        <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600 }}>Channel</th>
                                        <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600 }}>Intent</th>
                                        <th style={{ padding: "10px 16px", textAlign: "left", fontWeight: 600 }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
                                        <td style={{ padding: "10px 16px" }}>Ahmad R.</td>
                                        <td style={{ padding: "10px 16px" }}><span className="badge badge-green">WhatsApp</span></td>
                                        <td style={{ padding: "10px 16px" }}>Room booking</td>
                                        <td style={{ padding: "10px 16px", color: "var(--color-green)", fontWeight: 600 }}>✓ Captured</td>
                                    </tr>
                                    <tr style={{ borderBottom: "1px solid var(--color-gray-100)" }}>
                                        <td style={{ padding: "10px 16px" }}>Sarah L.</td>
                                        <td style={{ padding: "10px 16px" }}><span className="badge" style={{ background: "#EFF6FF", color: "#3B82F6" }}>Email</span></td>
                                        <td style={{ padding: "10px 16px" }}>Group rates</td>
                                        <td style={{ padding: "10px 16px", color: "var(--color-amber)", fontWeight: 600 }}>⟳ Follow-up</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "10px 16px" }}>Kumar P.</td>
                                        <td style={{ padding: "10px 16px" }}><span className="badge" style={{ background: "#F5F3FF", color: "#8B5CF6" }}>Web Chat</span></td>
                                        <td style={{ padding: "10px 16px" }}>Facilities inquiry</td>
                                        <td style={{ padding: "10px 16px", color: "var(--color-green)", fontWeight: 600 }}>✓ Captured</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* After-Hours Recovery */}
            <section className="section section-white">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">AFTER-HOURS RECOVERY</span>
                    <h2 style={{ marginTop: 12 }}>The Report Your GM Will Open Every Morning</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        Every morning at 8am, your GM gets an email: how many inquiries came in after hours,
                        how many were captured, and an estimated revenue figure. Proof of value, delivered daily.
                    </p>
                    <div style={{ background: "var(--color-gray-50)", borderRadius: 16, padding: 32, maxWidth: 500, margin: "0 auto", border: "2px solid var(--color-green)", textAlign: "left" }}>
                        <div style={{ fontWeight: 700, marginBottom: 16 }}>📧 Nocturn AI Morning Report — Feb 11</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                            <div style={{ background: "white", padding: 16, borderRadius: 8 }}>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-green)" }}>18</div>
                                <div style={{ fontSize: 12, color: "var(--color-gray-500)" }}>After-hours inquiries</div>
                            </div>
                            <div style={{ background: "white", padding: 16, borderRadius: 8 }}>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-green)" }}>95%</div>
                                <div style={{ fontSize: 12, color: "var(--color-gray-500)" }}>Recovery rate</div>
                            </div>
                        </div>
                        <div style={{ background: "white", padding: 16, borderRadius: 8, textAlign: "center" }}>
                            <div style={{ fontSize: 12, color: "var(--color-gray-500)" }}>Estimated revenue recovered</div>
                            <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "var(--color-green)" }}>RM 4,140</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Human Handoff */}
            <section className="section section-light">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">HUMAN HANDOFF</span>
                    <h2 style={{ marginTop: 12 }}>AI Knows When to Step Back</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        Complex requests? Special needs? Complaints? The AI transfers to your staff instantly —
                        with the full conversation context. Your guest never notices the switch.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", maxWidth: 700, margin: "0 auto" }}>
                        <div className="card" style={{ flex: 1, minWidth: 180, textAlign: "center" }}>
                            <div style={{ fontSize: 32 }}>🤖</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>AI Handles</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Room availability, rates, FAQs, directions, facilities</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: 24 }}>→</div>
                        <div className="card" style={{ flex: 1, minWidth: 180, textAlign: "center", borderColor: "var(--color-amber)" }}>
                            <div style={{ fontSize: 32 }}>🔄</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>Detects Complexity</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Group bookings, complaints, special requests, negotiations</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: 24 }}>→</div>
                        <div className="card" style={{ flex: 1, minWidth: 180, textAlign: "center" }}>
                            <div style={{ fontSize: 32 }}>👤</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>Human Takes Over</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Full context provided. No repeat questions for the guest.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security & Compliance */}
            <section className="section section-white">
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">SECURITY & COMPLIANCE</span>
                    <h2 style={{ marginTop: 12 }}>Enterprise-Grade Security. PDPA Ready.</h2>
                    <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 32, flexWrap: "wrap" }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 40 }}>🔒</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>End-to-End Encryption</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Data encrypted at rest and in transit</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 40 }}>🏢</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>Tenant Isolation</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Your data never mixes with other properties</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 40 }}>🇲🇾</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>PDPA Compliant</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Built for Malaysian data protection laws</p>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 40 }}>📋</div>
                            <div style={{ fontWeight: 700, marginTop: 8 }}>Audit Trail</div>
                            <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Complete logs of all AI interactions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>See These Features In Action</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        15-minute demo. Personalized for your property.
                    </p>
                    <a href="/book-demo" className="btn btn-primary btn-lg btn-glow">Book a Demo →</a>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "var(--fs-small)", marginTop: 16 }}>
                        Free 30-day pilot · No credit card · Live in 48 hours
                    </p>
                </div>
            </section>
        </>
    );
}
