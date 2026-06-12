import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/ressources",
        destination: "/diagnostic",
        permanent: true,
      },
    ];
  },
  async headers() {
    const securityHeaders = [
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://assets.calendly.com; frame-src https://calendly.com https://docs.google.com; img-src 'self' data: https://*.calendly.com; connect-src 'self' https://calendly.com ws:; font-src 'self'; base-uri 'self'; form-action 'self' https://docs.google.com mailto:; frame-ancestors 'none'; upgrade-insecure-requests;",
      },
    ];

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
