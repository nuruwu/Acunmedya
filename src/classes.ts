function topla(a:number, b:number) : number
{
    let result = a+b;
    return result;
}

console.log(topla(3,5))

const topla2 = (a:number, b:number) : number => {
    return a+b
}

console.log(topla2(5,10))

let students:string[] = ["A","B","C"]

students.forEach(function callback(i){
    console.log(i)
})

students.forEach((i) => console.log(i))


const selamla = (isim?:string) => {
    console.log(isim ? "Merhaba "+isim : "Merhaba")
}

const selamla2 = (isim:string="Ziyaretci") => {
    console.log("Merhaba "+ isim)
}

selamla2("Nurullah");
selamla2();


const toplama = (...a:number[]) : number => {
    let result = 0;
    a.forEach(number => result += number);
    return result
}

console.log(toplama(1,2,3))
console.log(toplama(4,5,6,7))


class Car {
    private _brand:string;
    model:string;
    year:number;


    

    constructor(brand:string, model:string, year:number) {

        this._brand = brand;
        this.model = model;
        this.year = year;


        console.log("Instance uretildi.")
    }



    get brand(){
        return this._brand;

    }

    set brand(brand:string){
        if (brand.length < 2) {
            console.log("Marka uzunlugu 2 haneden kucuk olamaz")
        }
        else
            return

    }






    start():void {
        console.log(this.brand + " " + this.model + " " + this.year + " " + "Arac baslatiliyor..")
        this.startEngine();
    }

    startEngine():void {
        console.log("Motor baslastiliyor")
    }
}

let car1 = new Car("BMW", "530i", 2024); 

car1.brand = "T"

car1.start()