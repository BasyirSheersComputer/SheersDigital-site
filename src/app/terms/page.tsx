import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Nocturn AI",
};

export default function TermsPage() {
    return (
        <section className="section section-white" style={{ paddingTop: 140, minHeight: "80vh" }}>
            <div className="container" style={{ maxWidth: 800 }}>
                <h1>Terms of Service</h1>
                <p className="text-gray-600" style={{ marginTop: 20 }}>
                    Last Updated: Feb 2026
                </p>
                <div style={{ marginTop: 40, lineHeight: 1.8 }} className="text-gray-600">
                    <p>
                        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Nocturn AI website and service operated by Sheers Software Sdn Bhd.
                    </p>
                    <p style={{ marginTop: 20 }}>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                    </p>
                    <p style={{ marginTop: 20 }}>
                        [Full Terms of Service to be populated]
                    </p>
                </div>
            </div>
        </section>
    );
}
