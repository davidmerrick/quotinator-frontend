function fetchQuote() {
    var QUOTINATOR_SERVER = "https://qfljl3elk7.execute-api.us-west-2.amazonaws.com/prd";
    var RANDOM_QUOTES_ENDPOINT = "quotes/random";
    var myRequest = new Request(QUOTINATOR_SERVER + "/" + RANDOM_QUOTES_ENDPOINT);

    var headers = {
        "x-api-key": "yQwURrAvRQ2yZb8124mE86Ba910bi9Fd2urGDaO5"
    }

    fetch(myRequest, { headers: headers })
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