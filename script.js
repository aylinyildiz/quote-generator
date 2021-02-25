const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
twitterLink = document.getElementById("twitterLink");


function getQuote() {
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = `"${data.content}"`;
            author.innerHTML = `- ${data.author}`;
        });
}



function tweetQuote() {
    tweet = `https://twitter.com/intent/tweet?text=${ quote.innerHTML}-${author.innerHTML}`;
    window.open(tweet, '_blank')
}

btn.addEventListener("click", getQuote);
twitterLink.addEventListener("click", tweetQuote);

function textSpeak() {
    var text = document.getElementById("quote").value;
    responsiveVoice.speak(text);
}