'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trans;
function trans(str) {
  var translation = str;

  // "ar"
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2); // -2 dos últimos caracteres
  }

  // start z
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }

  //  10 words-
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  // palindrome
  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}