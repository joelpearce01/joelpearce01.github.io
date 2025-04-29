let UserNumber = ['#','#','#','#','#','#','#','#','#','#']

let numSubmitIDs = document.querySelectorAll(".numSubmit");
let submitButtons = document.querySelectorAll(".subButton");
let userNumDisplay = document.querySelector(".userNum");
let thecontainer = document.querySelector(".container");
let finSubBut = document.querySelector('.finSubButton');

updateNumber();

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
    let counter = 0;
    button.addEventListener("mouseenter", function() {
        counter += 1;
        if (counter < 3) {
            let buttonWidth = this.offsetWidth;
            let buttonHeight = this.offsetHeight;

            let maxLeft = window.innerWidth - buttonWidth;
            let maxTop = window.innerHeight - buttonHeight;

            this.style.position = "absolute";
            this.style.top = Math.random() * (maxTop-200) + "px";
            this.style.left = Math.random() * (maxLeft-400) + "px";
        } else if (counter == 3) {
            messageCounter += 1;
            if (messageCounter == 1) {
                alert('sorry ill stop messing with you');
            } else if (messageCounter == 2) {
                alert('are you having fun yet?')
            } else if (messageCounter == 3) {
                alert('am I annoying you? \n:(')
            } else if (messageCounter == 4) {
                alert('why do you even wanna submit this anyway? \nits not going anywhere...')
            } else if (messageCounter == 5) {
                alert('is this even necessary')
            } else if (messageCounter == 6) {
                alert('uggghhh since youre being lame ill stop')
            } else if (messageCounter == 7) {
                alert('hi :3')
            } else if (messageCounter == 8) {
                alert('ok ok I`ll stop for real this time')
            } else if (messageCounter == 9) {
                null
            } else if (messageCounter == 10) {
                alert('sorry I went to get a drink and- Oh you`re almost done!')
            }
        }
    });
});

let startupMessage = document.getElementById("startupmsg");
let count = 0;

function NumberSubmitted(input, index) {
    console.log('number submitted, index = ' + index);
    console.log(count)

    if (input.length !== 1) {
        alert('invalid input, must be 1 number');
    } else if (isNaN(input)) {
        alert('invalid input, must be a number, not a letter or a symbol please');
    } else if (input > 9) {
        alert('must be a single digit, you SILLY SILLY BUFFOON')
    } else {
        count = (count + 1);
        if (count == 1) {
            startupMessage.textContent = 'make sure to use the mouse for optimal interaction :)';
        }
        if (count < 10){
            alert("you have selected " + input + " as your number \nare you sure this is right?");
    
            UserNumber[index] = input;
            updateNumber();
        } else if (count == 10) {
            alert("you have selected " + input + " as your number \nwow you`re quite confident! \nmake sure to press the submit number button!!!!!!!!");
    
            UserNumber[index] = input;
            updateNumber();
            count = 0;
        }
    }
    
};

finSubBut.addEventListener("click", finalSubmit);

function finalSubmit() {
    if (UserNumber.includes('#')) {
        alert('silly! you didn`t finish putting in your number')
        return;
    } else {
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

            alert(`Number submitted! \n make sure to double check your number... \n>:)`);
        }
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
    leaderboardDiv.innerHTML = "<h3>Leaderboard</h3>";
    leaderboard.forEach((time, index) => {
        leaderboardDiv.innerHTML += `<p>${index + 1}. ${time}</p>`;
    });
};

startTimer();

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