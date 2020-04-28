const parser = require("ua-parser-js");

export default function isUserAgentSignallingMobile(userAgentString) {
  const ua = parser(userAgentString);
  return ua.device.type === "mobile";
}
