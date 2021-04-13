const normalPerson = {
    firstname:'Tonmoy',
    lastname:'Saha',
    salary : 1500,
    getFullName: function(){
        console.log(this.firstname,this.lastname)
    },
    chargeBill: function(amount,tips,tax){
        console.log(this)
        this.salary=this.salary-amount-tips-tax
        return this.salary
    }
}
const heroPerson = {
    firstname:'Abir',
    lastname:'Basu',
    salary:2000
}
const friendlyPerson = {
    firstname:'Guru',
    lastname:'Doayl',
    salary:2500
}

// normalPerson.chargeBill()

// const heroBill = normalPerson.chargeBill.bind(heroPerson)
// heroBill(500)
// console.log(heroPerson.salary)

// const friendlyBill=normalPerson.chargeBill.bind(friendlyPerson)
// friendlyBill(400)
// console.log(friendlyPerson.salary)


// normalPerson.chargeBill.call(heroPerson, 900,30,10)
// normalPerson.chargeBill.call(heroPerson, 400,20,10)
// console.log(heroPerson.salary)

// normalPerson.chargeBill.call(friendlyPerson,700,20,30)
// normalPerson.chargeBill.call(friendlyPerson,900,30,10)
// console.log(friendlyPerson.salary)

//Apply...
normalPerson.chargeBill.apply(heroPerson,[300,30,3])
normalPerson.chargeBill.apply(heroPerson,[400,40,4])
console.log(heroPerson.salary)








// normalPerson.chargeBill(150)
// normalPerson.chargeBill(300)
// console.log(normalPerson.salary)
// console.log(normalPerson.firstname)











