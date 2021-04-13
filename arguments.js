function addNum(num1, num2) {
   let sum=0
   for (let i = 0; i < arguments.length; i++) {
       const num = arguments[i];
       sum = sum + num
   }
   return sum
}
let result = addNum(3,5,6,7,8)
console.log(result)







