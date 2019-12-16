let encipher = shift => string =>
  String.fromCharCode(...string
    .split('')
    .map(l=> l.charCodeAt(0)+shift)
  )
// The cipher being used
let shiftBy5 = encipher(5)
let secretMessage = shiftBy5("Hello From Cipher World")
console.log(secretMessage)


let decipher = shift => string =>
         String.fromCharCode(...string
               .split('')
               .map(l => l.charCodeAt(0) - shift)
         )

let unshiftBy5 = decipher(5)
let unsecretMessage = unshiftBy5(secretMessage)

console.log(unsecretMessage)
