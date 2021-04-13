function evenIfy(element){
    if (element%2==0) {
        console.log(element , 'is even')
    }
    else{
        console.log(element*2)
    }
    
}



nums = [12, 23, 34, 56, 67, 87, 98]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    evenIfy(element)
   
}

function evenAge(age){
    if (age%2==0) {
        console.log(age , 'is even number')
    }
    else{
        console.log(age*2)
    }
}

friends_age = [11, 12, 13, 14, 15, 16]
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i]
    evenAge(age)
}








