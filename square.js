function evenOdd(num){
    if (num%2==0) {
        return num
    }
    else{
        return num * 2
    }
}
let results = evenOdd(13)
let square = results * results
console.log(square)


function evenIfy_all(nums) {
    let even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        let result = evenOdd(num)
        even_array.push(result)
    }
    return even_array
    
}
let nums = [3, 10, 13, 16, 87, 76, 99]
let even_num = evenIfy_all(nums)
console.log(even_num)














