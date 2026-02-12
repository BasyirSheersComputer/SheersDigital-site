import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/book-demo/thank-you"],
        },
        sitemap: "https://nocturn.ai/sitemap.xml",
    };
}
