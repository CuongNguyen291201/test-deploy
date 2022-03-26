const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withCSS, withSass, withImages, withFonts, {
  exportPathMap: (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => { },
  env: {
    REACT_APP_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
    REACT_APP_PREFIX: process.env.NEXT_PUBLIC_PREFIX,
  },
  typescript: {
    ignoreBuildErrors: true
  },
}]);