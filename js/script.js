/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month",
    source: "Theodore Roosevelt",
    citation: "brainyquote.com",
    year: 1900
  },
  {
    quote: "They say marriages are made in Heaven. But so is thunder and lightning.",
    source: "Clint Eastwood",
    citation: "brainyquotes.com",
    year: 1972
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    source: "Abraham Lincoln",
    citation: "brainyquotes.com",
    year: 1860
  },
  {
    quote: "Get your facts first, then you can distort them as you please.",
    source: "Mark Twain",
    citation: "brainyquotes.com",
    year: 1875
  },
  {
    quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    source: "Reba McEntire",
    citation: "brainyquotes.com",
    year: 1985
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote () {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];

};
console.log(getRandomQuote());

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let holdQuote = getRandomQuote();
  let html = "";

  html += <p class = "quote"</p>
          <p class = "source">
          <span class = "citation"></span>
          <span class = "year"></span>
          </p>
  

};



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
let quoteBox = document.getElementById('quote-box');

