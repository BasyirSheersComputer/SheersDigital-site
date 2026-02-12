import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demo Booked — Thank You!",
    robots: { index: false, follow: false },
};

export default function ThankYouPage() {
    return (
        <section style={{ paddingTop: 140, paddingBottom: 80, minHeight: "100vh", background: "var(--color-gray-50)" }}>
            <div className="container" style={{ maxWidth: 600, textAlign: "center" }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
                <h1>You&apos;re Booked!</h1>
                <p style={{ color: "var(--color-gray-600)", marginTop: 16, lineHeight: 1.7 }}>
                    Thank you for booking a demo with Nocturn AI. We&apos;ll send you a calendar invite shortly
                    with the meeting link and details.
                </p>

                <div className="card" style={{ marginTop: 32, padding: 24, textAlign: "left" }}>
                    <h3 style={{ marginBottom: 12 }}>What to Expect</h3>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <li style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>1.</span>
                            <span>15-minute walkthrough personalized for your property</span>
                        </li>
                        <li style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>2.</span>
                            <span>Live demo showing how the AI handles real hotel inquiries</span>
                        </li>
                        <li style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>3.</span>
                            <span>Your personalized ROI estimate based on your property&apos;s data</span>
                        </li>
                        <li style={{ display: "flex", gap: 8 }}>
                            <span style={{ color: "var(--color-green)", fontWeight: 700 }}>4.</span>
                            <span>Q&A — ask us anything</span>
                        </li>
                    </ul>
                </div>

                <div style={{ marginTop: 32, padding: 20, background: "var(--color-green-light)", borderRadius: 12 }}>
                    <p style={{ fontWeight: 600, marginBottom: 8 }}>Know a colleague who&apos;s losing bookings after hours?</p>
                    <p style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                        Share our ROI calculator with them — it takes 30 seconds to see how much revenue they could recover.
                    </p>
                    <a href="/" className="btn btn-outline" style={{ marginTop: 12 }}>
                        Share the ROI Calculator →
                    </a>
                </div>
            </div>
        </section>
    );
}
