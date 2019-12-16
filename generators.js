let numbers = Infinity

let generateFizzBuzz = function* () {
  for(i = 0; i<= numbers; i++){
    if(i % 5 === 0 && i % 3 === 0) yield 'FizzBuzz'
    else if (i % 5 === 0) console.log('Buzz')
    else if (i % 3 === 0) console.log('Fizz')
    else console.log(i)
    }
}
let generatorObject = generateFizzBuzz()

console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
