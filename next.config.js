const withImages = require("next-images");

const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages({
    env: {
      GMAIL_PASSWORD: process.env.GMAIL_PASSWORD
    }
  })
);
