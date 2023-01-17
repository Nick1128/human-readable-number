module.exports = function toReadable (num) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  function convert_millions(num) {
  if (num >= 1000000) {
    return convert_millions(Math.floor(num / 1000000)) + " million " + convert_thousands(num % 1000000);
  } else {
    return convert_thousands(num);
  }
  }

  function convert_thousands(num) {
    if (num >= 1000) {
      return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
    } else {
      return convert_hundreds(num);
    }
  }

  function convert_hundreds(num) {
    if (num > 99 && num % 100 != 0) return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    else if (num % 100 == 0) return ones[Math.floor(num / 100)] + " hundred"
    else {
      return convert_tens(num);
    }
  }

  function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else if (num % 10 == 0) return tens[Math.floor(num / 10)];
    else {
      return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
  }

  function convert(num) {
    if (num == 0) return "zero";
    else return convert_millions(num);
  }
  return convert(num);
};
