import Link from "next/link";

export default function ThankYouPage() {
    return (
        <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div className="container">
                <div style={{ maxWidth: 600, margin: "0 auto" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
                    <h1 style={{ marginBottom: "1.5rem" }}>You're all set!</h1>
                    <p style={{ fontSize: "1.25rem", color: "var(--color-gray-600)", marginBottom: "2rem" }}>
                        Thanks for your interest in Nocturn AI. We've received your details and will be in touch shortly to help you recover lost revenue.
                    </p>

                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                        <Link href="/" className="btn btn-primary">
                            Return Home
                        </Link>
                        <Link href="/case-studies" className="btn btn-outline-primary">
                            View Case Studies
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
