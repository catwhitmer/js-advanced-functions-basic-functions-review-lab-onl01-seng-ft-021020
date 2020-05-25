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

let calculator = {
  add() {
    1 + 3
  }
}