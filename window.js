let name="Tonmoy"
function add(n1,n2){
    result=n1+n2
    console.log(name)
    function double(num){
        return num*2
    }
    const total = double(result)
    return total
}
console.log(name)
const sum = add(12,23)
console.log(sum)
console.log(result)