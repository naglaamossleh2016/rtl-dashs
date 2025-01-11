/* jshint -W100 */
/* jslint maxlen: 86 */
define(function () {
  // الفارسية (الفارسي)
  return {
    errorLoading: function () {
      return "لا يمكن تحميل النتائج.";
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = "يرجى حذف " + overChars + " حرف";

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = "يرجى إدخال " + remainingChars + " حرف أو أكثر";

      return message;
    },
    loadingMore: function () {
      return "جاري تحميل المزيد من النتائج...";
    },
    maximumSelected: function (args) {
      var message = "يمكنك فقط اختيار " + args.maximum + " عنصر";

      return message;
    },
    noResults: function () {
      return "لم يتم العثور على أي نتائج";
    },
    searching: function () {
      return "جاري البحث...";
    },
  };
});
