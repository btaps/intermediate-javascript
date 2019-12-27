
let generateFizzBuzz = function* () {
  let i = 0  
  while(true){
    if(i % 5 === 0 && i % 3 === 0){
      yield 'FizzBuzz'
    }else if (i % 5 === 0){
      yield('Buzz')
    }else if (i % 3 === 0){
      yield('Fizz')
    }else {
      yield i
    }
   i++
  }  
}
let generatorObject = generateFizzBuzz()

console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
