module.exports = {
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"], // Add your image domains here
  },
  trailingSlash: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all requests starting with /api
        destination: "https://welderfind-api.onrender.com/api/:path*", // Redirect to backend
      },
    ];
  },
};