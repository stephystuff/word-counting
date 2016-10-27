(function(){

  var sonnet = document.querySelector(".sonnet").innerText;

  // This fn takes in a string of words and returns an object with the long words counted.
  function wordFrequency(stringToSplit){
    var arrayOfStrings = stringToSplit.split (" ");
    var noShortWordsArray = [];
    var frequency = {};

    arrayOfStrings.forEach(function wordLength(word) {
      if (word.length > 2) {
        noShortWordsArray.push(word);
      }
    });

    noShortWordsArray.forEach(function count(word) {
      if (frequency[word]){
        frequency[word] += 1;
      } else {
        frequency[word] = 1;
      }
    });
    return frequency;
  }

  console.log(wordFrequency(sonnet));
})();
