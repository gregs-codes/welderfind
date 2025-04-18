const isProd = process.env.NODE_ENV === "production";



module.exports = {
    images: {
      unoptimized: true,
    },
    distDir: "build",
    assetPrefix: isProd ? "/welderfind/" : "",
    basePath: isProd ? "/welderfind" : "",
    trailingSlash: true,
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: "/api/:path*", // Proxy all requests starting with /api
          destination: "http://localhost:5000/api/:path*", // Redirect to backend
        },
      ];
    },
  };