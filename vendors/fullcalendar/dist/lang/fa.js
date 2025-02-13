!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery", "moment"], a)
    : "object" == typeof exports
    ? (module.exports = a(require("jquery"), require("moment")))
    : a(jQuery, moment);
})(function (a, b) {
  !(function () {
    "use strict";
    var a = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠",
      },
      c = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0",
      },
      d = (b.defineLocale || b.lang).call(b, "fa", {
        months:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        monthsShort:
          "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
            "_"
          ),
        weekdays: "الأحد_الاثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split(
          "_"
        ),
        weekdaysShort:
          "الأحد_الاثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm",
        },
        meridiemParse: /صبح|مساء/,
        isPM: function (a) {
          return /مساء/.test(a);
        },
        meridiem: function (a, b, c) {
          return 12 > a ? "صبح" : "مساء";
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدًا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [الماضي] [على الساعة] LT",
          sameElse: "L",
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوانٍ",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات",
        },
        preparse: function (a) {
          return a
            .replace(/[٠-٩]/g, function (a) {
              return c[a];
            })
            .replace(/،/g, ",");
        },
        postformat: function (b) {
          return b
            .replace(/\d/g, function (b) {
              return a[b];
            })
            .replace(/,/g, "،");
        },
        ordinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: { dow: 6, doy: 12 },
      });
    return d;
  })(),
    a.fullCalendar.datepickerLang("fa", "fa", {
      closeText: "إغلاق",
      prevText: "&#x3C;السابق",
      nextText: "التالي&#x3E;",
      currentText: "اليوم",
      monthNames: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      monthNamesShort: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      dayNames: [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
      ],
      dayNamesShort: ["أح", "إث", "ثلا", "أر", "خم", "جم", "سب"],
      dayNamesMin: ["أح", "إث", "ثلا", "أر", "خم", "جم", "سب"],
      weekHeader: "أسبوع",
      dateFormat: "yy/mm/dd",
      firstDay: 6,
      isRTL: !0,
      showMonthAfterYear: !1,
      yearSuffix: "",
    }),
    a.fullCalendar.lang("fa", {
      buttonText: { month: "شهر", week: "أسبوع", day: "يوم", list: "قائمة" },
      allDayText: "اليوم كامل",
      eventLimitText: function (a) {
        return "أكثر من " + a;
      },
    });
});
