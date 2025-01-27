export default {
  icon: `<i class="fa-solid fa-cookie"></i>`,
  name: {
    en: "View cookies",
    vi: "Xem cookies",
  },
  description: {
    en: "View cookies saved in current website",
    vi: "Xem cookies được lưu trong website hiện tại",
  },

  func: function () {
    var c = document.cookie.replace(/; /g, "\n");
    if (c == "") {
      alert("There is No cookie here");
    } else {
      if (
        confirm(
          "Cookies found:\n\n" + c + "\n\n - Do you want to open it in new tab?"
        )
      ) {
        let w = window.open(
          "",
          "Links",
          "scrollbars,resizable,width=400,height=600"
        );
        w.document.write(c);
      }
    }
  },
};
