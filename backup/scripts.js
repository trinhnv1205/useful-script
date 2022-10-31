// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browsers
let browser = {
  // Opera 8.0+
  //prettier-ignore
  isOpera: () => (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,

  // Firefox 1.0+
  isFirefox: () => typeof InstallTrigger !== "undefined",

  // Safari 3.0+ "[object HTMLElementConstructor]"
  //prettier-ignore
  isSafari: () => /constructor/i.test(window.HTMLElement) ||(function (p) {return p.toString() === "[object SafariRemoteNotification]";})(!window["safari"] ||(typeof safari !== "undefined" && window["safari"].pushNotification)),

  // Internet Explorer 6-11
  isIE: () => false || !!document.documentMode,

  // Edge 20+
  isEdge: () => !browser.isIE() && !!window.StyleMedia,

  // Chrome 1 - 79
  //prettier-ignore
  isChrome: () => !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime),

  // Edge (based on chromium) detection
  //prettier-ignore
  isEdgeChromium: () => browser.isChrome() && navigator.userAgent.indexOf("Edg") != -1,

  // Blink engine detection
  isBlink: () => (browser.isChrome() || browser.isOpera()) && !!window.CSS,
};