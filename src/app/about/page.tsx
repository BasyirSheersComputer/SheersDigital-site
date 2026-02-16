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
                    <h1 style={{ color: "white", marginTop: 12 }}>We Asked Hotels What They Actually Needed.<br />Then We Built It.</h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 650, margin: "20px auto 0" }}>
                        Nocturn AI is built by Sheers Software Sdn Bhd — a Malaysian technology company that started not with code, but with conversations.
                    </p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <span className="eyebrow">THE ORIGIN STORY</span>
                    <h2 style={{ marginTop: 12 }}>How Nocturn AI Was Born</h2>
                    <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
                        <p className="text-gray-600">
                            In late 2024, our founder Basyir set out to understand why hotels — one of the most guest-centric industries in the world — kept losing bookings to silence. He sat with:
                        </p>
                        <ul className="text-gray-600" style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                            <li>
                                <strong>A Revenue Manager at an international chain hotel in KL</strong> who told him: "Our primary operational weakness is systematic follow-up on inquiries."
                            </li>
                            <li>
                                <strong>A Reservation Manager at a city hotel</strong> who shared: "90% of our bookings come through manual channels. Once we close at 6PM, inquiries are dropped."
                            </li>
                            <li>
                                <strong>A Pre-sales Specialist</strong> who said: "99% of hotels — the main pain is paying the OTA."
                            </li>
                            <li>
                                <strong>A General Manager</strong> who had managed pre-openings across Southeast Asia and the Caribbean, who said: "The one metric that matters is guest experience scoring — everything else follows."
                            </li>
                        </ul>
                        <p className="text-gray-600">
                            The pattern was clear: Hotels have the demand. Guests are reaching out through WhatsApp, email, and phone. But the tools available are either too expensive, too complex, or solve the wrong problem.
                        </p>
                        <p className="text-gray-600">
                            Nocturn AI was built to solve this specific gap — and nothing else. Just the layer that catches every inquiry your current systems miss.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "start" }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ width: 160, height: 160, background: "var(--color-navy)", borderRadius: "50%", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 48, fontWeight: 700 }}>B</div>
                            <h3 style={{ fontSize: 20 }}>Basyir Sheers</h3>
                            <p style={{ fontSize: 14, color: "var(--color-gray-500)" }}>Founder & CEO<br />Sheers Software Sdn Bhd</p>
                        </div>
                        <div>
                            <span className="eyebrow">MEET THE FOUNDER</span>
                            <h2 style={{ marginTop: 12 }}>"I built this from the notes I took in hotel lobbies."</h2>
                            <p className="text-gray-600" style={{ marginTop: 16 }}>
                                My background is in systems engineering and project management. But before writing a single line of code for Nocturn AI, I spent months embedded in hotel operations across Malaysia, Singapore, and the Middle East.
                            </p>
                            <p className="text-gray-600" style={{ marginTop: 16 }}>
                                I didn't build this product from a Silicon Valley playbook. I built it listening to the people who actually run these properties tell me what keeps them up at night.
                            </p>
                            <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
                                <a href="https://www.linkedin.com/in/basyir" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-green)", fontWeight: 600 }}>LinkedIn →</a>
                                <a href="mailto:basyir@nocturn.ai" style={{ color: "var(--color-green)", fontWeight: 600 }}>Email →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Section */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <span className="eyebrow">THE COMPANY</span>
                    <h2 style={{ marginTop: 12 }}>Sheers Software Sdn Bhd</h2>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
                        A Malaysian technology company registered with SSM, focused on AI-powered solutions for the hospitality industry. We are a founding-stage company. We don&apos;t pretend otherwise.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginTop: 40 }}>
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
                        <div className="card" style={{ padding: 20, textAlign: "center", minWidth: 160 }}>
                            <div style={{ fontSize: 24 }}>💼</div>
                            <div style={{ fontWeight: 600, marginTop: 8, fontSize: 14 }}>Founded 2024</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Let&apos;s Talk About Your Property</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        15-minute call. We listen more than we talk.
                    </p>
                    <a href="/apply" className="btn btn-primary btn-lg btn-glow">Apply for Founding Cohort →</a>
                </div>
            </section>
        </>
    );
}
