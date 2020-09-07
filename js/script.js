/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    // the first object meets all exceeds expectations criteria
    quote: 'Get busy living or get busy dying.',
    source: 'Andy Dufresne',
    citation: 'The Shawshank Redemption',
    year: 1994,
    tags: ['Movie', 'Prison']
  },
  {
    quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself',
    source: 'Mark Caine',
  },
  {
    quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    source: 'Helen Keller',
    year: 1962
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    source: 'Mark Twain',
  },
  {
    quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    source: 'Audre Lorde',
  }
];



/***
 * `getRandomQuote` function
***/
// This makes sure that the same number doesn't come up twice
let randomNumber;
let savedNumber;
// This will generate a random index number for the quote and return
const getRandomQuote = () => {
    do {
    randomNumber = Math.floor(Math.random() * quotes.length); 
  } while (randomNumber === savedNumber)
  savedNumber = randomNumber;
  return quotes[randomNumber];
}

/***
 * `randomRGB` function
***/
const randomRGB = () => {
  const randomColor = () => {
    return Math.floor(Math.random() * 255);
  }
  document.body.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
}

/***
 * `printQuote` function
***/
const printQuote = () => {
  const randomQuote = getRandomQuote();
  let quoteHTML = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
  if (randomQuote.citation) {
    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.year) {
    quoteHTML += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.tags) {
    quoteHTML += ` <span>Tags: ${randomQuote.tags.join(', ')}</span>`
  }
  quoteHTML += `</p>`
  document.querySelector('#quote-box').innerHTML = quoteHTML;
  randomRGB();
}


// Automatically printQuote every 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);