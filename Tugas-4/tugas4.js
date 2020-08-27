

// Soal 1
console.log("----Soal 1----");
console.log("");
console.log("LOOP PERTAMA");

var n = 1;
var m =n+19;
while (n <=20) {
if (n%2===0) {
  console.log(n+ " - I love coding")
  n++
}else {
  n++
}

}

console.log("LOOP KEDUA");

while (m<=20 && m>0) {

  if (m%2===0) {
    ;
    console.log(m+ " - I will become a frontend developer")
    m--
  }else {

    m--
  }

    }
// Soal 2
console.log("");
console.log("----Soal 2----");
console.log("");


var a
for (var a = 1; a<=20; a++) {
  if (a%2===0)
   {
     console.log(a + " - berkualitas");

      }
  else if (a%3===0 && a%2!=0) {
    console.log(a + " - I Love Coding")
        }
  else {
      console.log(a+" - Santai")
    }
}

// Soal 3
console.log("");
console.log("----Soal 3----");
console.log("");

var y = "#########################"

for (var z = 1; z<=7; z++) {
  console.log(y.substring(0,z))

}


// Soal 4
console.log("");
console.log("----Soal 4----");
console.log("");

var kalimat="saya sangat senang belajar javascript"

console.log(kalimat.split(" "))

// Soal 5
console.log("");
console.log("----Soal 5----");
console.log("");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
daftarBuah.toString()
for (i = 0; i < daftarBuah.length; i++)
{
  console.log(daftarBuah[i]);
}
