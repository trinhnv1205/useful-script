export default {
  icon: `<i class="fa-brands fa-youtube"></i>`,
  name: {
    en: "Download youtube video (bypass 18+)",
    vi: "Tải video youtube (bypass 18+)",
  },
  description: {
    en: "Bypass age restriction, without login",
    vi: "Tải cả video giới hạn độ tuổi, không cần đăng nhập",
  },
  blackList: [],
  whiteList: ["*://*.youtube.com/*"],

  func: function () {
    let options = [
      {
        name: "10downloader",
        url: "https://10downloader.com/download?v=",
      },
      {
        name: "9xbuddy",
        url: "https://9xbuddy.com/process?url=",
      },
      {
        name: "ymp4",
        url: "https://ymp4.download/en50/?url=/",
      },
    ];

    let choose = prompt(
      "Tải video youtube: \n\n" +
        options.map((_, i) => `${i}: ${_.name}`).join("\n") +
        "\n\nNhập lựa chọn:",
      0
    );

    if (choice != null && choose >= 0 && choose < options.length) {
      window.open(options[choose] + location.href);
    }
  },
};
