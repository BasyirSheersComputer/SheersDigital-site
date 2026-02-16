"use client";

export function AnnouncementBar({ isVisible, onDismiss }: { isVisible: boolean; onDismiss: () => void }) {
    if (!isVisible) return null;

    return (
        <div className="announcement-bar" style={{
            width: "100%",
            height: "40px",
            background: "var(--color-navy)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 600,
            padding: "0 16px",
            position: "relative",
            zIndex: 1001
        }}>
            <span style={{ marginRight: 8 }}>🔥 Now Accepting 5 Hotels Into Our Founding Cohort — 30 Days Free</span>
            <a href="/apply" style={{ color: "white", textDecoration: "underline", marginRight: 24 }}>Apply →</a>
            <button
                onClick={onDismiss}
                style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                    opacity: 0.7,
                    marginLeft: "12px"
                }}
                aria-label="Dismiss announcement"
            >
                ✕
            </button>
        </div>
    );
}

