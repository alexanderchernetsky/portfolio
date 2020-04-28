const withVideos = require("next-videos");

const withImages = require("next-images");

const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages(
    withVideos()
  )
);
