import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Hotel Revenue Recovery & AI Insights",
    description:
        "Expert insights on hotel revenue recovery, WhatsApp automation, OTA commission reduction, and AI for hospitality.",
};

const articles = [
    {
        slug: "losing-revenue-unanswered-whatsapp",
        title: "How Malaysian Hotels Lose RM 5,000/Month From Unanswered WhatsApp Messages",
        excerpt: "30% of hotel inquiries arrive after 6pm. Here's how that translates to lost revenue — and what you can do about it.",
        category: "Revenue Recovery",
        readTime: "7 min read",
    },
    {
        slug: "ota-commission-calculator",
        title: "OTA Commission Calculator: How Much Is Booking.com Really Costing You?",
        excerpt: "At 15-25% per booking, the numbers add up fast. Use our calculator to see your true cost of OTA dependency.",
        category: "Direct Bookings",
        readTime: "8 min read",
    },
    {
        slug: "ai-chatbot-vs-whatsapp-ai",
        title: "AI Chatbot vs. WhatsApp AI: What Hotels Actually Need in 2026",
        excerpt: "Website chatbots handle 10% of inquiries. WhatsApp handles 90%. Here's why most hotels are solving the wrong problem.",
        category: "Technology",
        readTime: "6 min read",
    },
    {
        slug: "after-hours-revenue-leak",
        title: "After-Hours Hotel Inquiries: The Revenue Leak Nobody Talks About",
        excerpt: "85% of unanswered callers never call back. Your after-hours gap is your biggest revenue leak.",
        category: "Revenue Recovery",
        readTime: "6 min read",
    },
    {
        slug: "increase-direct-bookings",
        title: "How to Increase Direct Bookings Without Spending More on Marketing",
        excerpt: "The bookings are already coming to you. You're just not catching them. Here's a framework for direct booking growth.",
        category: "Direct Bookings",
        readTime: "7 min read",
    },
    {
        slug: "visit-malaysia-2026-hotels",
        title: "Visit Malaysia 2026: How Hotels Can Capture the Tourism Wave",
        excerpt: "47 million visitors expected. RM 329 billion in receipts. Is your hotel ready to capture the surge?",
        category: "Industry",
        readTime: "5 min read",
    },
    {
        slug: "pdpa-compliance-hotel-ai",
        title: "PDPA Compliance for Hotel AI: What You Need to Know",
        excerpt: "Using AI to handle guest data? Here's what Malaysian data protection law requires — and how to stay compliant.",
        category: "Compliance",
        readTime: "5 min read",
    },
    {
        slug: "gm-morning-report",
        title: "The Hotel GM's Morning Report: What AI-Recovered Revenue Looks Like",
        excerpt: "Every morning at 8am: inquiries handled, leads captured, revenue estimate. This is what proof of value looks like.",
        category: "Product",
        readTime: "5 min read",
    },
];

const categoryColors: Record<string, string> = {
    "Revenue Recovery": "#22C55E",
    "Direct Bookings": "#3B82F6",
    Technology: "#8B5CF6",
    Industry: "#F59E0B",
    Compliance: "#64748B",
    Product: "#0F172A",
};

export default function BlogPage() {
    return (
        <>
            <section className="section-dark" style={{ padding: "140px 0 80px" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <span className="eyebrow">BLOG</span>
                    <h1 style={{ color: "white", marginTop: 12 }}>Insights for Hotel Revenue Leaders</h1>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "var(--fs-large)", maxWidth: 520, margin: "20px auto 0" }}>
                        Data-backed articles on hotel revenue recovery, AI automation, and reducing OTA dependency.
                    </p>
                </div>
            </section>

            <section className="section section-white">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
                        {articles.map((article) => (
                            <a
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                className="card"
                                style={{ padding: 0, overflow: "hidden", textDecoration: "none", color: "inherit" }}
                            >
                                <div style={{
                                    height: 180,
                                    background: `linear-gradient(135deg, var(--color-navy), ${categoryColors[article.category] || "var(--color-green)"})`,
                                    display: "flex",
                                    alignItems: "flex-end",
                                    padding: 20,
                                }}>
                                    <span className="badge" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
                                        {article.category}
                                    </span>
                                </div>
                                <div style={{ padding: 20 }}>
                                    <h3 style={{ fontSize: 16, lineHeight: 1.4, marginBottom: 8 }}>{article.title}</h3>
                                    <p style={{ fontSize: 13, color: "var(--color-gray-500)", lineHeight: 1.5, marginBottom: 12 }}>
                                        {article.excerpt}
                                    </p>
                                    <span style={{ fontSize: 12, color: "var(--color-gray-400)" }}>{article.readTime}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-dark" style={{ padding: "60px 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h3 style={{ color: "white" }}>Ready to stop losing revenue?</h3>
                    <a href="/book-demo" className="btn btn-primary" style={{ marginTop: 16 }}>Book a Free Demo →</a>
                </div>
            </section>
        </>
    );
}
