let UserNumber = ['#','#','#','#','#','#','#','#','#','#']

let numSubmitIDs = document.querySelectorAll(".numSubmit");
let submitButtons = document.querySelectorAll(".subButton");
let userNumDisplay = document.querySelector(".userNum");
let thecontainer = document.querySelector(".container");
let finSubBut = document.querySelector('.finSubButton');
let testBTN = document.querySelector('.test');

updateNumber();

// testBTN.addEventListener('click', customAlert('according to all laws of aviation a bee should not be able to fly. its body is too fat and its wings are too small, but bees said fuck science and did it anyway...'));

function customAlert(msg) {
    // console.log('test popup triggered');
    if (document.querySelector('.custom-alert')) return; //prevents multiple overlays

    let overlay = document.createElement("div");
    overlay.classList.add('custom-alert');
    overlay.style.position = 'fixed'
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    let popup = document.createElement('div');
    popup.style.border = '1px black solid';
    popup.style.borderRadius = '10px';
    popup.style.backgroundColor = 'white';
    popup.style.width = '600px';
    popup.style.height = 'auto';
    popup.style.textAlign = 'left';
    popup.style.padding = '10px';
    popup.style.textWrap = 'stable';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    // popup.style.flex = 'auto 1';
    popup.style.position = 'absolute';
    popup.style.left = '50%';
    popup.style.top = '40%';
    popup.style.transform = 'translate(-50%, -50%)';

    let message = document.createElement('p');
    message.innerHTML = msg.replace(/\n/g, '<br>');
    message.style.margin = '20px';
    message.style.color = 'black';
    message.style.justifyContent = 'flex';
    message.style.textWrap = 'stable';
    message.style.overflowWrap = 'break-word';
    message.style.fontFamily = 'Arial, Helvetica, sans-serif';
    // message.style.position = 'flex-end';

    let dismissBTN = document.createElement('button');
    dismissBTN.innerHTML = '&times;';
    dismissBTN.style.padding = '10px';
    dismissBTN.style.border = 'none';
    dismissBTN.style.color = 'purple';
    dismissBTN.style.margin = '20px';
    dismissBTN.style.position = 'fixed';
    dismissBTN.style.right = '0px';
    dismissBTN.style.top = '0px';
    dismissBTN.style.height = '40px';
    dismissBTN.style.width = '40px';
    // dismissBTN.style.position = 'flex-start';

    popup.appendChild(message);
    popup.appendChild(dismissBTN);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    dismissBTN.addEventListener('click', function() {
        document.body.removeChild(overlay);
    })
};

submitButtons.forEach(button => {
    button.addEventListener("click", function() {
        let input = this.parentElement.querySelector(".inputNum").value;
        let parentDiv = this.parentElement;
        let index = Array.from(numSubmitIDs).indexOf(parentDiv);
        NumberSubmitted(input, index);
    });
});


let messageCounter = 0;

submitButtons.forEach(button => {
    button.hoverCounter = 0;

    button.addEventListener("mouseenter", function() {
        this.hoverCounter += 1;
        if (this.hoverCounter < 3) {
            let buttonWidth = this.offsetWidth;
            let buttonHeight = this.offsetHeight;

            let maxLeft = window.innerWidth - buttonWidth;
            let maxTop = window.innerHeight - buttonHeight;

            this.style.position = "absolute";
            this.style.top = Math.random() * (maxTop-300) + "px";
            this.style.left = Math.random() * (maxLeft-400) + "px";
        } else if (this.hoverCounter == 3) {
            messageCounter += 1;
            if (messageCounter == 1) {
                customAlert('sorry ill stop messing with you');
            } else if (messageCounter == 2) {
                customAlert('are you having fun yet?')
            } else if (messageCounter == 3) {
                customAlert('am I annoying you? \n:(')
            } else if (messageCounter == 4) {
                customAlert('why do you even wanna submit this anyway? \nits not going anywhere...')
            } else if (messageCounter == 5) {
                customAlert('is this even necessary')
            } else if (messageCounter == 6) {
                customAlert('uggghhh since youre being lame ill stop')
            } else if (messageCounter == 7) {
                customAlert('hi :3')
            } else if (messageCounter == 8) {
                customAlert('ok ok I`ll stop for real this time')
            } else if (messageCounter == 9) {
                null
            } else if (messageCounter == 10) {
                customAlert('sorry I went to get a drink and- Oh you`re almost done!')
            }
        }
    });
});

let startupMessage = document.getElementById("startupmsg");
let count = 0;

function NumberSubmitted(input, index) {
    console.log('number submitted, index = ' + index + '\ninput:' + input);
    console.log(count)

    input = input.trim();
    console.log(input + 'logged');

    if (!/^\d$/.test(input)) {
        console.log(typeof input);
        customAlert('invalid input, must be a number, not a letter or a symbol please.');
        return;
    } else {
        count += 1;
        if (count == 1) {
            startupMessage.textContent = 'make sure to use the mouse for optimal interaction :)';
        }
        if (count < 10){
            customAlert("you have selected " + input + " as your number. \nnice.");
        } else if (count == 10) {
            customAlert("you have selected " + input + " as your number. \nwow you`re quite confident! \nmake sure to press the submit number button \nonce you`re done!!!!!!!!");
            
            count = 0;
        }

        UserNumber[index] = input;
        updateNumber();
    }
};

let fincounter = 0;

finSubBut.addEventListener("click", function() {
    if (UserNumber.includes('#')) {
        customAlert('silly! you didn`t finish putting in your number.')
        return;
    } else {
        finalSubmit();
        fincounter = 0;
    }
});

finSubBut.addEventListener('mouseenter', function() {
    if (!UserNumber.includes('#') && fincounter < 3) {
        fincounter += 1;
        this.style.position = "absolute";
        this.style.top = Math.random() * (window.innerHeight - 400) + "px";
        this.style.left = Math.random() * (window.innerWidth - 200) + "px";
    } else if (!UserNumber.includes('#') && fincounter == 3) {
        fincounter += 1;
        if (fincounter == 4) {
            customAlert('fine! ill put it back! you win! \n');
        }
        this.style.top = '';
        this.style.left = '';
    }
});

function finalSubmit() {
    console.log('number submitted');
    let randomindex = Math.round(Math.random() * UserNumber.length);

    if (UserNumber[randomindex] === '-') {
        randomindex = Math.round(Math.random() * UserNumber.length);
    } else {
        let num = parseInt(UserNumber[randomindex]);
        num = (num + 1) % 10;
        UserNumber[randomindex] = num.toString();
        updateNumber();
        resetTimer();

        customAlert(`Number submitted! \nmake sure to double check your number... \n>:)`);

        let pressure = document.createElement('p');
        pressure.classList.add('presMSG');
        pressure.innerHTML = 'the pressure is on! try to beat your last score after using the reset button!'
        document.body.appendChild(pressure);
        document.querySelector('.leaderboard').style.visibility = 'visible';
    }
};

function updateNumber() {
    let formattedNumber = '';
    
    for (let i = 0; i < UserNumber.length; i++) {
        formattedNumber += UserNumber[i];
        if (i === 2 || i === 5) {
            formattedNumber += '-';
        }
    }

    userNumDisplay.textContent = formattedNumber;
};

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");

let startTime;
let timerInterval;
let leaderboard = [];

function startTimer() {
    startTime = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 10);
};

function updateTimer() {
    let elapsed = Date.now() - startTime;

    let mins = Math.floor(elapsed / 60000);
    let secs = Math.floor((elapsed % 60000) / 1000);
    let milli = Math.floor((elapsed % 1000) / 10);

    minutes.textContent = mins.toString().padStart(2, '0');
    seconds.textContent = secs.toString().padStart(2, '0');
    milliseconds.textContent = milli.toString().padStart(2, '0');
};

function resetTimer() {
    recordTime();
    startTimer();
};

function recordTime() {
    let recordedTime = `${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
    leaderboard.push(recordedTime);
    updateLeaderboard();
};

function updateLeaderboard() {
    const leaderboardDiv = document.querySelector('.leaderboard');
    leaderboardDiv.innerHTML = "<h3>timescore</h3>";
    leaderboard.forEach((time, index) => {
        leaderboardDiv.innerHTML += `<p>${index + 1}. ${time}</p>`;
    });
};

startTimer();

let resetBTN = document.querySelector(".reset");

resetBTN.addEventListener('click', function() {
    UserNumber = ['#','#','#','#','#','#','#','#','#','#'];
    updateNumber();

    document.querySelectorAll('.inputNum').forEach(input => {
        input.value = '';
    });
    
    submitButtons.forEach(button => {
        button.style.position = '';
        button.style.top = '';
        button.style.left = '';
        button.hoverCounter = 0;
        messageCounter = 0;
    });

    startTimer();
})

function resetAll() {
    UserNumber = ['#','#','#','#','#','#','#','#','#','#'];
    updateNumber();

    document.querySelectorAll('.inputNum').forEach(input => {
        input.value = '';
    });

    leaderboard = [];
    updateLeaderboard();
    
    startTimer();
}

window.onload = resetAll;