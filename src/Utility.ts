import { format } from "date-fns";

export default {
  cleanHtmlTags(str: string) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  },
  validateInput(object: any, key: any, param: any) {
    if (object[key]) {
      const err = object[key].errors.includes(param);
      return err;
    } else {
      return false;
    }
  },
  validateErrorField(object: any, key: any) {
    if (object[key]) {
      if (object[key].errors.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  formatDate(object, type) {
    if (type == "short") {
      return format(object, "dd/MM/yyyy");
    } else if (type == "detail") {
      return format(object, "dd/MM/yyyy HH:mm");
    } else if (type == "long-detail") {
      return format(object, "dd MMMM yyyy HH:mm");
    } else {
      return format(object, "eeee, dd/MM/yyyy");
    }
  },

  formatRupiah(angka, prefix?) {
    var number_string = angka.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      var separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  },
  formatNumber(angka) {
    if (!Number.isInteger(angka)) {
      return parseInt(angka.replace(/[^,\d]/g, ""));
    }
    return angka;
  },
  getDisplayDate(date) {
    var today = new Date();
    var compDate = date;
    var diff = today.getTime() - compDate.getTime();
    if (compDate.getTime() == today.getTime()) {
      return "Today";
    } else if (diff <= 24 * 60 * 60 * 1000) {
      return "Yesterday";
    } else {
      return compDate.toDateString();
    }
  },
  roundingUp(value: number) {
    var s = parseFloat("0." + (value / 100 + "").split(".")[1]);
    return s > 0 ? (1 - s) * 100 : 0;
  },

  roundingDown(value: number) {
    return parseFloat("0." + (value / 100 + "").split(".")[1]) * 100;
  },
};
