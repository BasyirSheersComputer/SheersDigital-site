import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Sheers Software Sdn Bhd",
    description:
        "Nocturn AI is built by Sheers Software Sdn Bhd, a Malaysian technology company on a mission to help hotels capture every booking opportunity.",
};

export default function AboutPage() {
    return (
        <>
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">ABOUT US</span>
                    <h1 style={{ color: "white", marginTop: 12 }}>Built in Malaysia. For Malaysian Hotels.</h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 560, margin: "20px auto 0" }}>
                        We&apos;re Sheers Software Sdn Bhd — a team of engineers and hospitality
                        professionals building the future of hotel guest engagement.
                    </p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
                        <div>
                            <span className="eyebrow">OUR MISSION</span>
                            <h2 style={{ marginTop: 12 }}>No Hotel Should Lose Bookings Because Nobody Answered</h2>
                            <p style={{ color: "var(--color-gray-600)", marginTop: 16, lineHeight: 1.7 }}>
                                Malaysian hotels receive 90% of their bookings through manual channels.
                                Yet reservation desks close at 6pm. Staff are overwhelmed. Guests book elsewhere.
                            </p>
                            <p style={{ color: "var(--color-gray-600)", marginTop: 12, lineHeight: 1.7 }}>
                                We built Nocturn AI to bridge that gap — an AI concierge that captures every inquiry
                                across WhatsApp, web, and email, 24 hours a day. Not to replace your team, but to
                                make sure no booking falls through the cracks while they rest.
                            </p>
                        </div>
                        <div style={{ background: "var(--color-gray-50)", borderRadius: 16, padding: 32 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                <div style={{ textAlign: "center", padding: 16 }}>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "var(--color-green)" }}>24/7</div>
                                    <div style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Always On</div>
                                </div>
                                <div style={{ textAlign: "center", padding: 16 }}>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "var(--color-green)" }}>&lt;30s</div>
                                    <div style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Response Time</div>
                                </div>
                                <div style={{ textAlign: "center", padding: 16 }}>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "var(--color-green)" }}>🇲🇾</div>
                                    <div style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Malaysian-Built</div>
                                </div>
                                <div style={{ textAlign: "center", padding: 16 }}>
                                    <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "var(--color-green)" }}>48h</div>
                                    <div style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Setup Time</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <span className="eyebrow">WHY NOCTURN?</span>
                    <h2 style={{ marginTop: 12 }}>The Name Says It All</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>
                        <em>Nocturnal</em> — active at night. That&apos;s when hotels lose the most bookings.
                        After 6pm, when reservation desks close and inquiries pile up, Nocturn AI takes over.
                        Capturing bookings while you sleep.
                    </p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <span className="eyebrow">THE COMPANY</span>
                    <h2 style={{ marginTop: 12 }}>Sheers Software Sdn Bhd</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        A Malaysian technology company focused on AI-powered solutions for the hospitality industry.
                        Registered with SSM Malaysia. PDPA compliant. Building products that make Malaysian
                        businesses more competitive.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                        <div className="card" style={{ padding: 20, textAlign: "center", minWidth: 160 }}>
                            <div style={{ fontSize: 24 }}>🏢</div>
                            <div style={{ fontWeight: 600, marginTop: 8, fontSize: 14 }}>SSM Registered</div>
                        </div>
                        <div className="card" style={{ padding: 20, textAlign: "center", minWidth: 160 }}>
                            <div style={{ fontSize: 24 }}>🔒</div>
                            <div style={{ fontWeight: 600, marginTop: 8, fontSize: 14 }}>PDPA Compliant</div>
                        </div>
                        <div className="card" style={{ padding: 20, textAlign: "center", minWidth: 160 }}>
                            <div style={{ fontSize: 24 }}>🇲🇾</div>
                            <div style={{ fontWeight: 600, marginTop: 8, fontSize: 14 }}>Malaysian-Founded</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Let&apos;s Talk About Your Property</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        15-minute demo. Personalized for your hotel.
                    </p>
                    <a href="/book-demo" className="btn btn-primary btn-lg btn-glow">Book a Free Demo →</a>
                </div>
            </section>
        </>
    );
}
