var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', function() {
    displayAnswer(current.answer);
});


var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let current = {
    question: '',
    answer: ''
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw Error(response.statusText);
        };

        const json = await response.json();

        displayQuote(json.question);
        console.log();

        current.question = json.question;
        current.answer = json.answer;

    } catch(err) {
        console.log(err);
        alert('fail');
    };
    console.log('help oh god please send help');
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text')
    quoteText.textContent = quote;
}

function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text')
    answerText.textContent = answer;
}

getQuote();