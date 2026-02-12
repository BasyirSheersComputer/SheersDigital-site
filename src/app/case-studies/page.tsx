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
                <div className="container" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <div style={{ background: "var(--color-gray-50)", borderRadius: 16, padding: 48 }}>
                        <div style={{ fontSize: 48, marginBottom: 16 }}>🏨</div>
                        <h2>Pilots in Progress</h2>
                        <p style={{ color: "var(--color-gray-600)", marginTop: 12, marginBottom: 32, lineHeight: 1.7 }}>
                            Our first cohort of hotel pilots is underway. We&apos;re capturing data on inquiry volumes,
                            after-hours recovery rates, and revenue impact. Case studies with real numbers will be
                            published here once pilots complete.
                        </p>
                        <h3 style={{ marginBottom: 16 }}>What We&apos;ll Share</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, textAlign: "left" }}>
                            <div className="card" style={{ padding: 16 }}>
                                <strong>Property Profile</strong>
                                <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Star rating, rooms, city</p>
                            </div>
                            <div className="card" style={{ padding: 16 }}>
                                <strong>The Problem</strong>
                                <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>In their own words</p>
                            </div>
                            <div className="card" style={{ padding: 16 }}>
                                <strong>Results Table</strong>
                                <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Inquiries, recovery rate, revenue</p>
                            </div>
                            <div className="card" style={{ padding: 16 }}>
                                <strong>GM Quote</strong>
                                <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4 }}>Direct testimonial</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 40 }}>
                        <h3>Want to Be Our Next Case Study?</h3>
                        <p style={{ color: "var(--color-gray-600)", marginTop: 8, marginBottom: 24 }}>
                            Join our pilot program and get 30 days free. Your results could be featured here.
                        </p>
                        <a href="/book-demo" className="btn btn-primary btn-lg">Join the Pilot →</a>
                    </div>
                </div>
            </section>
        </>
    );
}
