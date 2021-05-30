const apiQuotes = fetch("https://type.fit/api/quotes") //gets dataset from API 
.then(function(response) {
  return response.json(); //converts it into a json file 
})
.then(function(data) { //function that is wanted below
//   console.log(data[10]);
  const randomQuoteNum = Math.floor(Math.random() * data.length); 
    console.log(randomQuoteNum);
    // data[randomQuote] is the whole value containing author and text
    const randomQuote = (data[randomQuoteNum]);

    var authorName = '';
    if(randomQuote.author == null){
        authorName = "- anonymous";
    } else {
       authorName = "- " + randomQuote.author;
    }
    console.log(authorName);
    document.querySelector("#quote").innerHTML = randomQuote.text;
    const theAuthorName = document.querySelector('#author');
    theAuthorName.innerHTML = authorName;
    document.body.appendChild(theAuthorName);
    // console.log(authorName);
});
