const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/welderfind/" : "",
  basePath: isProd ? "/welderfind" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
};