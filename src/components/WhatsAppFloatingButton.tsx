"use client";

import { useEffect, useState } from "react";

export function WhatsAppFloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://wa.me/60XXXXXXXXXX?text=Hi%2C%20I'm%20interested%20in%20Nocturn%20AI%20for%20my%20hotel."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            style={{
                position: "fixed",
                bottom: "24px",
                right: "24px",
                width: "56px",
                height: "56px",
                background: "#25D366",
                borderRadius: "50%",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9990,
                transition: "transform 0.3s ease",
                textDecoration: "none"
            }}
            title="Chat with us on WhatsApp"
        >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.572 1.903.871 2.807.871 3.181 0 5.767-2.587 5.768-5.766.001-3.182-2.585-5.769-5.769-5.769V6.172zm.983 8.329c-.392.196-2.316 1.144-2.654 1.274-.326.126-.558.191-.795-.196-.237-.387-.91-1.145-1.115-1.397-.206-.252-.41-.212-.801-.017-.391.196-1.644.606-2.5 1.369-.668.595-1.119 1.332-1.25 1.558-.131.226-.014.348.182.544.175.176.391.457.587.685.196.228.261.381.392.632.13.252.065.474-.033.669-.098.196-.881 2.122-1.208 2.906-.316.762-.637.66-.88.672-.218.012-.468.015-.718.015-.25 0-.655.094-.997.469-.342.375-1.306 1.275-1.306 3.111 0 1.836 1.336 3.609 1.522 3.861.186.252 2.629 4.014 6.37 5.632 2.518 1.089 3.033.873 3.585.819.827-.081 2.562-1.048 2.923-2.059.36-1.012.36-1.879.252-2.065-.108-.186-.391-.297-.818-.511z" />
            </svg>
        </a>
    );
}
