
//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//Jawaban soal 1
console.log(kataPertama+" "+kataKedua+" "+kataKetiga+" "+kataKeempat.toUpperCase());


//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

//Jawaban soal 2
var n = Number(kataPertama) + Number(kataKedua) + Number(kataKetiga) + Number(kataKeempat);
console.log(n);


//Soal 3
var kalimat = 'wah javascript itu keren sekali';

//Jawaban soal 3
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 15);
var kataKetiga = kalimat.substring(15, 19);
var kataKeempat = kalimat.substring(19, 25);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


//Soal 4
var nilai =83;

//Jawaban soal 4
var text;

if (nilai >= 80) {
  text= "A" ; }
  else if (nilai<80 && nilai >= 70) {
  text= "B" ;
} else if (nilai <70 && nilai >=60) {
  text= "C" ;
} else if (nilai,60 && nilai >=50) {
  text= "D" ;
} else {
  text = "E" ;
}
console.log(text);

//Soal 5
var tanggal = 22;
var bulan = 4;
var tahun = 2020;

//Jawaban soal 5
var text;

switch(bulan) {
  case 1:
    text = "januari";
    break;
  case 2:
    text = "Februari";
    break;
  case 3:
    text = "Maret";
    break;
  case 4:
    text = "April";
    break;
  case 5:
    text = "Mei";
    break;
  case 6:
    text = "Juni";
    break;
  case 7:
    text = "Juli";
    break;
  case 8:
    text = "Agustus";
    break;
  case 9:
    text = "September";
    break;
  case 10:
    text = "Oktober";
    break;
  case 11:
    text = "November";
    break;
  case 12:
    text = "Desember";
    break;

}

console.log(tanggal+ " " +text+" "+tahun);
