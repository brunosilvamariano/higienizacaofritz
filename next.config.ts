import type { NextConfig } from 'next';
import { legacyRedirects } from './src/config/legacy-redirects';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
];

const nextConfig: NextConfig = {
  distDir: process.env.FRITZ_BUILD_DIR || '.next',
  poweredByHeader: false,
  async redirects() {
    // /servicos é uma página canônica, sem redirecionamento para a home.
    return legacyRedirects;
  },
  experimental: { workerThreads: true, cpus: 1, useTypeScriptCli: false },
  images: { remotePatterns: [], qualities: [75, 85] },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
