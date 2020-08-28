//Soal 1
console.log("---Soal 1---");
function halo(){
  return "Halo Sanbers!"
}

console.log(halo());

console.log();
//Soal 2
console.log("---Soal 2---");
function kalikan(num1, num2){
  return num1*num2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali)

console.log();

//Soal 3
console.log("---Soal 3---");
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 function introduce(name, age,address,hobby){
 return "nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

console.log();

// Soal 4
console.log("---Soal 4---");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , "1992"]
var objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jeniskelamin : arrayDaftarPeserta[1],
    hobby : arrayDaftarPeserta[2],
    tahunlahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)
console.log();

//Soal 5
console.log("---Soal 5---");
var buah = [{nama: "Strawberry", warna: "merah", adaBijinya: "tidak", harga: "9000"},
            {nama: "Jeruk", warna: "oranye", adaBijinya: "ada", harga: "8000"},
            {nama: "Semangka", warna: "hijau & merah", adaBijinya: "ada", harga: "10000"},
            {nama: "Pisang", warna: "kuning", adaBijinya: "tidak", harga: "5000"}]
console.log(buah[0]);
console.log();

// Soal 6
console.log("---Soal 6---");
var dataFilm = []
function tambahdata(namaf,genref,durasif,tahunf)
 { dataFilm.push({nama: namaf,genre: genref,durasi: durasif,tahun: tahunf})

}
tambahdata("kokuhaku","thriller","90 Menit","2010")
tambahdata("Norwegian Wood","romance","120 Menit","2010")
console.log(dataFilm);
