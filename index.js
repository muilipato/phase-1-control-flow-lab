function scuberGreetingForFeet(ride){
 
  let ans;
  if(ride<=400){
   ans = 'This one is on me!';
  }
  else if(ride>2000 && ride<=2500){
    ans = 'I will gladly take your thirty bucks.';

  }
  else if(ride>2500){
    ans ='No can do.';
  }
  return ans;

}


function ternaryCheckCity(city){
  let myans;

  if(city === 'NYC'){
   myans = 'Ok, sounds good.';
  }
  else {
    myans ='No go.';
  }
  return myans;

}

function switchOnCharmFromTip(tip){
 
  switch (tip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return 'Bye.';
  }

  // Write your code here
}