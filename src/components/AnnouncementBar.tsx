"use client";

import { useEffect, useState } from "react";

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const dismissed = localStorage.getItem("nocturn-announcement-dismissed-v1");
        if (dismissed && new Date(dismissed) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
            setIsVisible(false);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("nocturn-announcement-dismissed-v1", new Date().toISOString());
    };

    if (!isVisible) return null;

    return (
        <div className="announcement-bar" style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "40px",
            background: "var(--color-navy)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            fontSize: "14px",
            fontWeight: 600,
            padding: "0 16px"
        }}>
            <span style={{ marginRight: 8 }}>🔥 Now Accepting 5 Hotels Into Our Founding Cohort — 30 Days Free</span>
            <a href="/apply" style={{ color: "white", textDecoration: "underline", marginRight: 24 }}>Apply →</a>
            <button
                onClick={handleDismiss}
                style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    opacity: 0.7
                }}
                aria-label="Dismiss announcement"
            >
                ✕
            </button>
        </div>
    );
}
