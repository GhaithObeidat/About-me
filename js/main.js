'use strict';

let userName = prompt('What is your name?');
alert('Welcome ' + userName);

let age = prompt('do you think my age is more than 25?');
if(age .toLowerCase()==='no' || age .toLowerCase()==='n')
{
  alert('That is true I was born in 1997');
}
else if(age .toLowerCase()==='yes' || age .toLowerCase()=== 'y')
{
  alert('NO is this for real?');
}
else{
  alert('you do not seem intersted huh');
}
console.log(age);

let height = prompt('Do you think I am below 1.8 meters?');
if(height .toLowerCase()==='no' || height .toLowerCase()==='n')
{
  alert('That is right I am 1.8 m exactly');
}
else if(height .toLowerCase()==='yes' || height .toLowerCase()=== 'y')
{
  alert('wrong answer I am exactly 1.8 meters');
}
else{
  alert('It is okay lets go to to next question');
}
console.log(height);

let glasses = prompt('Do I look like a guy who wears glasses?');
if(glasses .toLowerCase()==='no' || glasses .toLowerCase()==='n')
{
  alert('Well I wish, glasses are still cool tho');
}
else if(glasses .toLowerCase()==='yes' || glasses .toLowerCase()=== 'y')
{
  alert('yes I was born with glasses lol');
}
else{
  alert('arent you interested in glasses too?');
}
console.log(glasses);

let Music = prompt('Do I look like a guy who likes hip hop?');
if(Music .toLowerCase()==='no' || Music .toLowerCase()==='n')
{
  alert('I hear that a lot');
}
else if(Music .toLowerCase()==='yes' || Music .toLowerCase()=== 'y')
{
  alert('You are right I love hip hop');
}
else{
  alert('Music is life man');
}
console.log(Music);

let Study = prompt('Do I look like an engineer?');
if(Study .toLowerCase()==='no' || Study .toLowerCase()==='n')
{
  alert('Well that is not what I hear a lot');
}
else if(Study .toLowerCase()==='yes' || Study .toLowerCase()=== 'y')
{
  alert('Yes I studied civil engineering');
}
else{
  alert('It is alright I know nobody is intersted in that');
}
console.log(Study);

let number=prompt('From 1 to 10 Guess which day is my birthday');
for (let i=4 ; i>1 ; i--)
{
  if (number === '9')
  {
    alert('That is absolutely right');
    break;
  }
  else if(number>9){
    alert('Too high');
    number=prompt('From 1 to 10 Guess which day is my birthday');
  }
  else if (number<9){
    alert('Too low');
    number=prompt('From 1 to 10 Guess which day is my birthday');
  }
  else if (number!==9){
    alert('My birthday is on the 9th of May');

  }
  else {
    break;
  }

}

let color=['green', 'yellow', 'black', 'grey'];
let guess=prompt('which colors do you think I like? green, yellow, black, grey');

for(let i=6 ; i>1 ; i--)
{
  if(guess .toLowerCase()===color[2] || guess .toLowerCase()===color[3]) {
    alert('You are definetely right!');
    break;
  }
  else if (guess .toLowerCase()===color[0] && guess .toLowerCase()===color[1]){
    alert('Wrong');
    guess=prompt('which colors do you think I like? green, yellow, black, grey');
  }
  else if (guess .toLowerCase() !==color)
  {
    guess=prompt('which colors do you think I like? green, yellow, black, grey');
  }
  else {
    break;
  }
}
alert('Thanks for your time ' + userName);
