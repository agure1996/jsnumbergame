'use strict';

let score = 20;



let secretNumber; 

function randomise(){
secretNumber = Math.trunc(Math.random() * 20) + 1;
}

randomise();

// const actual = document.querySelector('.number').textContent = secretNumber

// console.log(secretNumber);



document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess);

    if (score > 0) {


        if (!guess) {
            document.querySelector('.message').textContent = '🤲🏽 No Number guessed, try guess what number the secret number is'
        }

        //When they finally guess correctly
        else if (guess === secretNumber) {
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '20rem';
            document.querySelector('.number').textContent = secretNumber
            let highscore =  document.querySelector('.highscore').textContent
            if(score > highscore) {
                document.querySelector('.highscore').textContent = score
            } 
            switch (score) {
                case score < 20 && score > 15:
                    document.querySelector('.message').textContent = '🤯 Almost first try!! '
                   
                    break;
                case score < 15 && score > 10:
                    document.querySelector('.message').textContent = '😌 Good work!!'
                   
                    break;
                case score < 10 && score > 5:
                    document.querySelector('.message').textContent = '😨 Phew you had me worried!!'
                   
                    break;
                case score < 5 :
                    document.querySelector('.message').textContent = '💀 By the SKIN OF YOUR TEEETH!!!'
                    break;
                default: document.querySelector('.message').textContent = 'Congratulations. . . .I guess 👺'
                    break;
                    
            }

        } else if (guess > secretNumber) {
            let diff = guess - secretNumber;
            
            switch (diff) {
                case 1:
                    document.querySelector('.message').textContent = '😱 kjlsjaskdlads!!!!'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;

                case 2:

                case 3:
                    document.querySelector('.message').textContent = '😨 you are soooooo  close!!!!'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 4:
                    document.querySelector('.message').textContent = '😧ooph you are not far!!!! guess lower'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 5:
                    document.querySelector('.message').textContent = '😌You are still a little off, a little high'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 6:
                case 7:
                case 8:
                    document.querySelector('.message').textContent = '🥱You are not even close buddy, too high'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                default: document.querySelector('.message').textContent = `😴I would give up, you're never gonna guess it. Lower!!!! 🤬`
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
            }
        } else if (secretNumber > guess) {
            let diff = secretNumber - guess;
            switch (diff) {
                case 1:
                    document.querySelector('.message').textContent = '😱 asdasdasdasd!!!!'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 2:

                case 3:
                    document.querySelector('.message').textContent = '😨 you are soooooo  close!!!! a bit higher!!!'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 4:
                    document.querySelector('.message').textContent = '😧ooph you are not far!!!! guess higher'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 5:
                    document.querySelector('.message').textContent = '😌You are still a little off, HIGHER!'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                case 6:
                case 7:
                case 8:
                    document.querySelector('.message').textContent = '🥱You are not even close buddy'
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
                default: document.querySelector('.message').textContent = `😴I would give up, you're never gonna guess it at this rate, AIM HIGHER 🤬`
                    score--;
                    document.querySelector('.score').textContent = score;
                    break;
            }
        }

    } 
    //If they run out of score attempts and it reaches 0
    if (score === 0 ){
        
        document.querySelector('.message').textContent = `GAME OVER 💩 the Correct number was ${secretNumber} `
        
}


})


//If we want to play again
document.querySelector('.again').addEventListener('click', ()=>{

   //reset values so we can replay the game 
   resetValues();


})

function resetValues(){
    score = 20;
    randomise();
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.number').textContent = "?"
    document.querySelector('.number').value = secretNumber
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}