import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing — Start at RM 1,500/mo | Free 30-Day Pilot",
    description:
        "Plans for 3-star to 5-star hotels. Every plan starts with a free 30-day pilot. Recover RM 3,000-8,000/month in lost bookings.",
};

export default function PricingPage() {
    return (
        <>
            {/* Pilot Banner */}
            <section style={{ background: "var(--color-green)", padding: "140px 0 24px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "var(--fs-large)" }}>
                        🚀 Start With a Free 30-Day Pilot — No Credit Card Required
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="section section-white" style={{ paddingTop: 40 }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">PRICING</span>
                    <h1 style={{ marginTop: 12 }}>Invest in Revenue Recovery, Not Marketing Spend</h1>
                    <p style={{ color: "var(--color-gray-600)", maxWidth: 560, margin: "16px auto 48px" }}>
                        Every plan pays for itself. The question isn&apos;t whether you can afford it — it&apos;s how much you&apos;re losing without it.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
                        <PricingCard
                            tier="Starter"
                            price="1,500"
                            target="Budget & 3-star, <100 rooms"
                            features={[
                                "1 WhatsApp line",
                                "Web chat widget",
                                "500 conversations/month",
                                "Basic dashboard",
                                "Email support",
                            ]}
                            cta="Start Free Pilot"
                            recommended={false}
                        />
                        <PricingCard
                            tier="Professional"
                            price="3,000"
                            target="4-star, 100-300 rooms"
                            features={[
                                "2 WhatsApp lines",
                                "Web chat widget",
                                "Email auto-handler",
                                "2,000 conversations/month",
                                "Full dashboard + Reports",
                                "Priority support",
                            ]}
                            cta="Start Free Pilot"
                            recommended={true}
                        />
                        <PricingCard
                            tier="Enterprise"
                            price="5,000+"
                            target="5-star, 300+ rooms"
                            features={[
                                "Unlimited WhatsApp lines",
                                "Web chat widget",
                                "Email auto-handler",
                                "Unlimited conversations",
                                "Full dashboard + API",
                                "Dedicated account manager",
                                "Custom integrations",
                            ]}
                            cta="Contact Us"
                            recommended={false}
                        />
                    </div>
                </div>
            </section>

            {/* ROI Comparison */}
            <section className="section section-light">
                <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
                    <div style={{ background: "white", borderRadius: 16, padding: 32, border: "2px solid var(--color-green)", textAlign: "center" }}>
                        <h3>The Math is Simple</h3>
                        <p style={{ color: "var(--color-gray-600)", marginTop: 12, lineHeight: 1.7 }}>
                            At RM 230 ADR, recovering just <strong>5 bookings/month from OTA</strong> saves you
                            RM 170-285 per booking. That&apos;s <strong>RM 850-1,425 in commission savings alone</strong> —
                            before counting after-hours recovery.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 24, flexWrap: "wrap" }}>
                            <div>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-red)" }}>
                                    RM 170-285
                                </div>
                                <div style={{ fontSize: 13, color: "var(--color-gray-500)" }}>OTA commission per booking</div>
                            </div>
                            <div style={{ fontSize: 24, display: "flex", alignItems: "center" }}>→</div>
                            <div>
                                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-green)" }}>
                                    RM 0
                                </div>
                                <div style={{ fontSize: 13, color: "var(--color-gray-500)" }}>Direct booking commission</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing FAQ */}
            <section className="section section-white">
                <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
                    <h2 style={{ textAlign: "center", marginBottom: 32 }}>Pricing Questions</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <PricingFAQ
                            q="Is there a contract or minimum commitment?"
                            a="No. Every plan starts with a free 30-day pilot. After that, billing is month-to-month. You can cancel anytime."
                        />
                        <PricingFAQ
                            q="What happens if I exceed my conversation limit?"
                            a="We'll notify you when you're approaching your limit. You can upgrade mid-month or we'll queue messages for your team. No surprise charges."
                        />
                        <PricingFAQ
                            q="Can I upgrade or downgrade my plan?"
                            a="Yes, anytime. Upgrades take effect immediately. Downgrades apply at the next billing cycle."
                        />
                        <PricingFAQ
                            q="Do you offer annual discounts?"
                            a="Yes. Annual plans receive 2 months free. Contact us for details."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-dark" style={{ padding: "80px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "white" }}>Every Plan Starts With a Free 30-Day Pilot</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 12, marginBottom: 32 }}>
                        See the revenue recovery before you commit.
                    </p>
                    <a href="/book-demo" className="btn btn-primary btn-lg btn-glow">Start Your Free Pilot →</a>
                </div>
            </section>
        </>
    );
}

function PricingCard({ tier, price, target, features, cta, recommended }: {
    tier: string; price: string; target: string; features: string[]; cta: string; recommended: boolean;
}) {
    return (
        <div
            className="card"
            style={{
                padding: 0,
                overflow: "hidden",
                border: recommended ? "2px solid var(--color-green)" : "1px solid var(--color-gray-200)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {recommended && (
                <div style={{
                    background: "var(--color-green)",
                    color: "white",
                    textAlign: "center",
                    padding: "6px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                }}>
                    MOST POPULAR
                </div>
            )}
            <div style={{ padding: "32px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3>{tier}</h3>
                <div style={{ marginTop: 8 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700 }}>RM {price}</span>
                    <span style={{ color: "var(--color-gray-500)", fontSize: 14 }}>/month</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-gray-500)", marginTop: 4, marginBottom: 24 }}>{target}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "left", flex: 1 }}>
                    {features.map((f, i) => (
                        <li key={i} style={{ display: "flex", gap: 8, fontSize: 14, alignItems: "flex-start" }}>
                            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
                <a
                    href="/book-demo"
                    className={`btn ${recommended ? "btn-primary" : "btn-outline"}`}
                    style={{ width: "100%", marginTop: 24 }}
                >
                    {cta}
                </a>
            </div>
        </div>
    );
}

function PricingFAQ({ q, a }: { q: string; a: string }) {
    return (
        <div style={{ background: "var(--color-gray-50)", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontWeight: 600, marginBottom: 6 }}>{q}</div>
            <p style={{ fontSize: 14, color: "var(--color-gray-600)", lineHeight: 1.6 }}>{a}</p>
        </div>
    );
}
