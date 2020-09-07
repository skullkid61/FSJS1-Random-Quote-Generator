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
    tags: 'movie', 'prison'
  },
  {
    quote: 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself',
    source: 'Mark Caine',
  },
  {
    quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
    source: 'Helen Keller',
  },
  {
    quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.',
    source: 'Mark Twain',
  },
  {
    quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    source: 'Audre Lorde',
  }
]



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);