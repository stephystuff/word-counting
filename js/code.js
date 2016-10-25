var quoteString = 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.';
var space = " ";

function splitString (stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

splitString(quoteString, space);
