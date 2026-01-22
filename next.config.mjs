/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ahmadsit.com',
            },
            {
                protocol: 'https',
                hostname: 'www.madrasatuahmad.com',
            },
        ],
    },
};

export default nextConfig;
