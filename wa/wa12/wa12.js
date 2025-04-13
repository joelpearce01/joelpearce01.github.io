var endpointimage = "https://api.thecatapi.com/v1/images/search";
var endpointquote = "https://api.breakingbadquotes.xyz/v1/quotes";

api_key = 'live_fVhlpNuf0kDfvLojU2iVslXmQfVwq2RlrOwRkxlxLcSuP2ZfK1x8Os29nuNHWBDZ';

let current = {
    imageurl: '',
    alt: '',
    quote: ''
};

// buttons
document.querySelector('#js-new-image').addEventListener('click', getImage);
document.querySelector('#js-quote').addEventListener('click', getQuote);

//fetching functions
async function getImage() {
    try {
        const catimage = await fetch(endpointimage);

        if (!catimage.ok) {
            throw Error(catimage.statusTest());
        };

        const catdata = await catimage.json();
        const imageObj = catdata[0];

        current.imageurl = imageObj.url;
        current.alt = imageObj.id;
        displayImage(current.imageurl, current.alt);

        console.log(caturl[0].url);
        console.log(caturl[1]);

    } catch(err) {
        console.log('image: fail', err);
    };
};

async function getQuote() {
    try {
        const response = await fetch(endpointquote);

        if (!response.ok) {
            throw Error(response.statusTest());
        };

        const bbquote = await response.json();

        current.quote = bbquote[0].quote;

        console.log(bbquote[0].quote);

        displayImage(current.imageurl, current.alt);

    } catch(err) {
        console.log('quote: fail', err);
    };
};

//display functions
function displayImage(url, id) {
    const container = document.querySelector("#image-container");
    container.innerHTML = '';
    
    const Wrapper = document.createElement("div");
    Wrapper.classList.add("Wrapper");

    const catImgUrl = document.createElement("img");
    catImgUrl.setAttribute('src',`${current.imageurl}`);
    catImgUrl.setAttribute('alt', `Cat ID: ${current.alt}`);
    catImgUrl.classList.add("showcase");

    const quoteText = document.createElement("div");
    quoteText.classList.add("bbnoquote");
    quoteText.textContent = current.quote;

    Wrapper.appendChild(catImgUrl);
    Wrapper.appendChild(quoteText);
    container.append(Wrapper);
};

window.addEventListener('DOMContentLoaded', () => {
    getQuote().then(() => getImage());
  });