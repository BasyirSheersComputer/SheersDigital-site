import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies — Real Hotel Results",
    description:
        "See how Malaysian hotels recover lost revenue with Nocturn AI. Real data from real pilots.",
};

export default function CaseStudiesPage() {
    return (
        <>
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">CASE STUDIES</span>
                    <h1 style={{ color: "white", marginTop: 12 }}>Real Hotels. Real Results.</h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 520, margin: "20px auto 0" }}>
                        We&apos;re currently running pilot programs with hotels across Malaysia.
                        Results will be published here as they complete.
                    </p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
                    {/* Pilot Story 1 */}
                    <article style={{ marginBottom: 80 }}>
                        <div style={{ background: "var(--color-navy)", color: "white", padding: "4px 12px", borderRadius: 100, fontSize: 12, display: "inline-block", marginBottom: 16, fontWeight: 600 }}>
                            EARLY PILOT DATA
                        </div>
                        <h2 style={{ marginBottom: 24, fontSize: 32 }}>
                            How a Bukit Bintang City Hotel<br />
                            Recovered RM 12k in 30 Days
                        </h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
                            <div className="card" style={{ padding: 24, borderLeft: "4px solid var(--color-green)" }}>
                                <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, color: "var(--color-gray-500)", fontWeight: 600 }}>The Problem</div>
                                <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6 }}>
                                    "Our front desk is busy with check-ins from 2 PM to 8 PM. We were <strong>missing 40% of WhatsApp inquiries</strong> during peak hours, and 100% of inquiries after midnight. Guests were ghosting us."
                                </p>
                            </div>
                            <div className="card" style={{ padding: 24, borderLeft: "4px solid var(--color-amber)" }}>
                                <div style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, color: "var(--color-gray-500)", fontWeight: 600 }}>The Nocturn Fix</div>
                                <p style={{ marginTop: 8, fontSize: 16, lineHeight: 1.6 }}>
                                    Nocturn AI took over instant responses. It answered price queries, checked availability for specific dates, and <strong>flagged high-value group bookings</strong> for the Sales Manager to close the next morning.
                                </p>
                            </div>
                        </div>

                        <div style={{ background: "var(--color-gray-50)", borderRadius: 16, padding: 32 }}>
                            <h3 style={{ textAlign: "center", marginBottom: 32 }}>30-Day Pilot Results</h3>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }}>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: "var(--color-navy)" }}>463</div>
                                    <div style={{ fontSize: 14, color: "var(--color-gray-500)", marginTop: 4 }}>Inquiries Handled</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: "var(--color-green)" }}>92%</div>
                                    <div style={{ fontSize: 14, color: "var(--color-gray-500)", marginTop: 4 }}>Captured (Name/Number)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: "var(--color-navy)" }}>RM 12,400</div>
                                    <div style={{ fontSize: 14, color: "var(--color-gray-500)", marginTop: 4 }}>Est. Revenue Recovered</div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div style={{ textAlign: "center", marginTop: 40, padding: "40px", background: "var(--color-green-light)", borderRadius: 16 }}>
                        <h3>Ready to see these numbers for your hotel?</h3>
                        <p style={{ color: "var(--color-gray-600)", marginTop: 8, marginBottom: 24 }}>
                            Join our pilot program. 30 days risk-free.
                        </p>
                        <a href="/book-demo" className="btn btn-primary btn-lg">Start Your Pilot →</a>
                    </div>
                </div>
            </section>
        </>
    );
}
