import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Nocturn AI",
};

export default function PrivacyPage() {
    return (
        <section className="section section-white" style={{ paddingTop: 140, minHeight: "80vh" }}>
            <div className="container" style={{ maxWidth: 800 }}>
                <h1>Privacy Policy</h1>
                <p className="text-gray-600" style={{ marginTop: 20 }}>
                    Last Updated: Feb 2026
                </p>
                <div style={{ marginTop: 40, lineHeight: 1.8 }} className="text-gray-600">
                    <p>
                        Sheers Software Sdn Bhd ("us", "we", or "our") operates the Nocturn AI website and service.
                    </p>
                    <p style={{ marginTop: 20 }}>
                        We are committed to protecting your personal data in accordance with the Personal Data Protection Act 2010 (PDPA) of Malaysia.
                        This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
                    </p>
                    <p style={{ marginTop: 20 }}>
                        [Full Privacy Policy to be populated]
                    </p>
                </div>
            </div>
        </section>
    );
}
