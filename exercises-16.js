function totalDigitRekursif(angka) {
var angkastring = angka.toString();
var hasilstring = 0;
for (var i=0; i < angkastring.length;i++){
  hasilstring +=  parseInt(angkastring[i]);  
}
return hasilstring;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5 
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5