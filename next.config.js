/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async headers() {
    return [
      {
        // Prevent zooming in the app
        source: "/(.*)",
        headers: [
          {
            key: "viewport",
            value:
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
