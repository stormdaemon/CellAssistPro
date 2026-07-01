import type { NextConfig } from "next";

// Les en-têtes de sécurité (CSP incluse) sont définis une seule fois dans
// netlify.toml : ils s'appliquent à toutes les réponses au niveau du CDN.

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
};

export default nextConfig;
