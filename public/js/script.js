function fetchQuote() {
    var QUOTINATOR_SERVER = "https://qfljl3elk7.execute-api.us-west-2.amazonaws.com/prd";
    var RANDOM_QUOTES_ENDPOINT = "quotes/random";
    var myRequest = new Request(QUOTINATOR_SERVER + "/" + RANDOM_QUOTES_ENDPOINT);

    fetch(myRequest)
        .then(response => response.json())
        .then(quote => {
                document.getElementById("quote-text").innerHTML = quote.text;
            document.getElementById("quote-author").innerHTML = quote.author;
        });
}

document.addEventListener("DOMContentLoaded", event => {
    fetchQuote();
    document.getElementById("more-quotes").addEventListener("click", event => fetchQuote());
});