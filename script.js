let apiQuotes = [];
const changeQuoteText = document.querySelector("#quote");
const authorHTML = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const twitterBtn = document.getElementById("twitter");
// Show new quote func

newQuoteButton.addEventListener("click", function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  const quoteText = quote["text"];
  changeQuoteText.textContent = quoteText;
  const author = quote["author"];
  authorHTML.textContent = author;
  if (quote.text.length > 100) {
    changeQuoteText.classList.add("long-quote");
  } else {
    changeQuoteText.classList.remove("long-quote");
  }
});

// Get quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    // catch error here
  }
}

// //Tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${changeQuoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

// //Event listeners
twitterBtn.addEventListener("click", tweetQuote);

//On Load
getQuotes();
