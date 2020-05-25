function saturdayFun (fun="roller-skate") {
  return`This Saturday, I want to ${fun}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective (string="*") {
  return function(param="special") {
    return `You are ${string}${param}${string}!`
  }
}

const Calculator = {

    add: function(a, b){
        return a + b;
    },

    subtract: function(a, b){
        return a - b;
    },

    multiply: function(a, b){
        return a * b;
    },

    divide: function(a, b){
        return a / b;
    }
};

function actionPlayer (stInt, array) {
  let int = starting_int;
    function_array.forEach(func => {
        int = func(int)
    });
    return int
}