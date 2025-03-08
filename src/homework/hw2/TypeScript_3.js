if (true) {
    let id1 = 29;
    var id2 = 15;
    const id3 = 514

    id1 = 242;

   ///id3 = 425;
}
///console.log(number); scope disinda erisilemez
///console.log(id3); scope disinda erisilemez
console.log(id2);



id2 = 25; // var ve let ile tanimlanan degiskenlerin degeri degistirilebilir, const degisimez



/////////////////////////////////////



let name1 = "Nurullah";
let no = 23;
let secure = true;

let n = null; 

let array = [1,2,3]
let obj = {};

let func = function(){};

console.log(typeof(name1))
console.log(typeof(no))
console.log(typeof(secure))
console.log(typeof(n))
console.log(typeof(array))
console.log(typeof(obj))
console.log(typeof(func))

////////////////


const num1 = prompt("Birinci sayiyi girin: ");
const num2 = prompt("İkinci sayiyi girin: ");

// Girilen değerlerin sayıya dönüştürülmesini sağlayalım
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

let  summary = number1 + number2;
alert(`İki sayinin toplami: ${summary}`);



