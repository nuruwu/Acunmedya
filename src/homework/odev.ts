// Question 1
let sum:number = 0;
for (let count = 1; count < 50; count++) {
    
    if (count%2) {
        sum += count
    }
    
}
console.log(sum);



// Question 2

let start:number = 7;

for (let i = 1; i < 10; i++) {
    let result:number = start*i;
    console.log(`${start} * ${i} = ${result}`);

}