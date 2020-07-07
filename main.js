/******************
 * YOUR CODE HERE *
 ******************/
const onlyOdds = function (arr) {
  let result = []
  for (const n of arr) {
    if (n % 2 === 1) {
      result.push(n)
    }
  }
  return result
}



const onlyEvens = function (arr) {
  let result = []
  for (const n of arr) {
    if (n % 2 === 0) {
      result.push(n)
    }
  } return result
}



const shortNamesOnly = function (arr) {
  let result = []
  for (const name of arr) {
    if (name.length < 7) {
      result.push(name)
    }
  }
  return result
}



const dNames = function (arr) {
  let result = []
  for (const name of arr) {
    if (name[0].toLowerCase() === 'd') {
      result.push(name)
    }
  }
  return result
}






/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  dNames,
}
