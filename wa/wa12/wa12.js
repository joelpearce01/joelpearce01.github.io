var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', function() {
    displayAnswer(current.genre);
});

var endpointgenre = "https://binaryjazz.us/wp-json/genrenator/v1/";
// https://github.com/cyberboysumanjay/GaanaAPI
var endpointimage = "https://api.thecatapi.com/v1/images/search";


let current = {
    question: '',
    adjectives: '',
    genre: ''
};

async function getQuote() {
    try {
        const response = await fetch(endpointgenre);
        const catimage = await fetch(endpointimage);

        if (!response.ok) {
            throw Error(response.statusText);
        };

        if (!catimage.ok) {
            throw Error(catimage.statusTest());
        };

        const json = await response.json();
        const cat = await response.json();

        displayQuote(json.instruments);
        displayQuote(json.adjectives);
        displayQuote(json.genre);
        displayImage(cat.url)

        console.log(json.genre);
        console.log(json.adjectives);

        current.question = json.instruments;
        current.adjectives = json.adjectives;
        current.genre = json.genres;

    } catch(err) {
        console.log(err);
        alert('fail');
    };
    console.log('help oh god please send help');
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayImage(image) {
    const newimage = document.createElement(img);
    newimage.src = image;
    newimage.width = image.width;
    newimage.height = image.height;
    const imagecontainer = document.createElementById('image-container');
    imagecontainer.appendChild(newimage);
}

function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

getQuote();