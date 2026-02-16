export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <section style={{ paddingTop: 140, paddingBottom: 80 }}>
            <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
                <a href="/blog" style={{ color: "var(--color-green)", fontSize: 14, fontWeight: 600, display: "inline-block", marginBottom: 24 }}>
                    ← Back to Blog
                </a>
                <span className="badge badge-green" style={{ marginBottom: 12 }}>Article</span>
                <h1>Article Coming Soon</h1>
                <p style={{ color: "var(--color-gray-600)", marginTop: 16, lineHeight: 1.7 }}>
                    This article is currently being written by our hospitality technology team.
                    Apply for our Founding Cohort and we&apos;ll notify you when new content is published.
                </p>
                <div style={{ marginTop: 32, padding: 24, background: "var(--color-gray-50)", borderRadius: 12 }}>
                    <h3>While you wait...</h3>
                    <p style={{ fontSize: 14, color: "var(--color-gray-600)", marginTop: 8 }}>
                        Want to see how Nocturn AI can help your hotel capture more revenue?
                    </p>
                    <a href="/apply" className="btn btn-primary" style={{ marginTop: 16 }}>Apply for Founding Cohort →</a>
                </div>
            </div>
        </section>
    );
}
