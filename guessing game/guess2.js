const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min)+1);

output = document.getElementById("display").ariaValueMax;

let attempts = 0;
let guess;
let running=true;
function check(){
    while(running){
        guess = window.prompt(`enter a number between ${min} - ${max}`);
        guess= Number(guess);
        if(isNaN(guess)){
            window.alert('please enter a valid number');
        }
        else if (guess < min , guess >max){
            window.alert('please enter a valid number');
        }
        else{
            attempts++;
            if(guess < answer){
                window.alert('too low try again');
            }
            else if(guess > answer){
                window.alert('too high try again');
            }
            else{
                window.alert(`correct the answer was ${answer} u had ${attempts} incorrect attempts`);
                running = false;
            }
        }
    }
}