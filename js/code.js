var quoteString = 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.';

var wordCount = {};

var counter = wordFrequency(quoteString).forEach(function countNum(count) {
wordCount[count] = (wordCount[count] || 0) +1;
});

function wordFrequency (stringToSplit) {
  var arrayOfStrings = stringToSplit.split(" ");
  console.log(arrayOfStrings);
  return arrayOfStrings;
}


console.log(wordCount);















wordFrequency(quoteString);
