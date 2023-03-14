
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }


 function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`

 }

 //1) function exists
 //2) when initialized with '*' creates a function 
 //that, when called, wraps an adjective in a highlight
 //3) when initialized with '||' creates a function 
 //that, when called, wraps an adjective in a highlight
 function wrapAdjective(star = "*"){
    return function(adjective= "special"){
        return `You are ${star}${adjective}${star}!`;}
 }
