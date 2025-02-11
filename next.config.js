module.exports = {
  basePath: "/mrehmanx64.github.io",
  assetPrefix: "/mrehmanx64.github.io/",
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
