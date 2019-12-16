let reduce = function(inputArray, operation, accumulation) {
  for(let i=0; i<inputArray.length; i++) {
    let inputArrayElement = inputArray[i]
     accumulation = operation(inputArrayElement, accumulation)
  }
  return accumulation
}

let filterOutOdds = (n, accumulation)=>{
  if(n % 2 === 0) {
    accumulation.push(n)
  }
  return accumulation
}

let array = [1,2,3,4,5,6,7,8]
let filteredArray = reduce(array, filterOutOdds, [])

console.log(filteredArray)
