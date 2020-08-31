// Soal 1

const luaslingker= (r) => {
  return 3.14*r*r*0.5
}
const kellingker= (r) => {
  return 3.14*r*2
}
let lLingker = luaslingker(2)
let kLingker = kellingker(2)
console.log(`Luas lingkaran: ${lLingker} dan keliling lingkaran: ${kLingker}`);
console.log();
//Soal 2
let kalimat = ""
const tambahkalimat=(i) => {
  kalimat+=`${i} `

}
const  [kata1, kata2, kata3,kata4,kata5] =["saya", "adalah", "seorang","frontend","developer"]

tambahkalimat(`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`)

console.log(kalimat);
console.log();

// Soal 3
const newFunction= (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () =>{
      console.log(`${firstName} ${lastName}`)
      return
    }
  }
}
//Driver Code
newFunction("William", "Imoh").fullName()
console.log();

// Soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation, spell);
console.log();
//Soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
let combined =[...west, ...east]
//Driver Code
console.log(combined)
