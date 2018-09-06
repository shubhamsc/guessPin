let createPin = function(){
  let pin = [];
  while(pin.length<4) {
    let digit = Math.floor(Math.random()*10);
    if(!pin.includes(digit))
    pin.push(digit);
  }
  return pin;
};

let pin = '';
let attempt = 0;

let getPin= function(){
  pin = createPin().join('');
  document.getElementById('pin').innerHTML=pin;
  return pin;
};

let getPinFromInput = function(){
  return document.getElementById('pinBox').value;
};

let submitPin =function(){
  attempt++;
  if(attempt<=6){
    let enteredPin = getPinFromInput();
    matchPin(enteredPin,pin);
    document.getElementById('pinBox').value='';
    return;
  }
  document.getElementById('result').innerHTML = "Game Over";
  // restart();
};

let restart = function(){
  for (let index=0; index<pin.length; index++) {
    let number = document.getElementById(index);
    number.innerHTML = '_';
    number.style = `background-color:${"none"}`;
  }
  attempt = 0;
  document.getElementById('attempt').innerHTML = `Attempt:${attempt}`;
  document.getElementById('pinBox').value='';
  document.getElementById('result').innerHTML = '';
  getPin();
}

let matchPin = function(enteredPin,rightPin){
  setColor(enteredPin,rightPin);
  if(enteredPin==rightPin)
  document.getElementById('result').innerHTML = `Your Pin is = ${rightPin}`
  document.getElementById('attempt').innerHTML = `Attempt:${attempt}`
};

let setColor =function(enteredPin,rightPin){
  for (let index=0; index<enteredPin.length; index++) {
    document.getElementById(index).innerHTML = enteredPin[index];
    setRedColor(index);
    if(rightPin.includes(enteredPin[index]))
    setYellowColor(index);
    if(enteredPin[index]==rightPin[index])
    setGreenColor(index);
  }
};
let setGreenColor = function(index){
  let number = document.getElementById(index);
  number.style = `background-color:${"green"}`;
};

let setYellowColor = function(index){
  let number = document.getElementById(index);
  number.style = `background-color:${"yellow"}`;
};

let setRedColor = function(index){
  let number = document.getElementById(index);
  number.style = `background-color:${"red"}`;
};

let startGame = function(){
  getPin();
  document.addEventListener('keypress',getPinFromInput);
};

window.onload = startGame;
