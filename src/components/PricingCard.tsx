
interface PricingCardProps {
    tier: string;
    price: string;
    target: string;
    features: string[];
    cta: string;
    recommended: boolean;
    ctaLink?: string;
}

export function PricingCard({
    tier,
    price,
    target,
    features,
    cta,
    recommended,
    ctaLink = "/book-demo"
}: PricingCardProps) {
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
                background: "white",
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
                    href={ctaLink}
                    className={`btn ${recommended ? "btn-primary" : "btn-outline"}`}
                    style={{ width: "100%", marginTop: 24 }}
                >
                    {cta}
                </a>
            </div>
        </div>
    );
}
