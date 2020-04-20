let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

if (age > 18 && registeredEarly === true){
  raceNumber += 1000;
  console.log(`Your racer number is ${raceNumber}. You run at 9:30am`);
}
else if (age > 18 && registeredEarly != true){
  console.log(`Your racer number is ${raceNumber}. You run at 11:00am`);
}
else if (age < 18) {
  console.log(`Your racer number is ${raceNumber}. You run at 12:30pm`);
}
else {
  console.log(`Please see the registration desk`);
}
