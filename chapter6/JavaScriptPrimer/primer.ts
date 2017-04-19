// let products = [
//     { name: "Hat", price: 24.5, stock: 10 },
//     { name: "Kayak", price: 289.99, stock: 1 },
//     { name: "Soccer Ball", price: 10, stock: 0 },
//     { name: "Running Shoes", price: 116.50, stock: 20 }
// ];

// let totalValue = products
//     .filter(item => item.stock > 0)
//     .reduce((prev, item) => prev + (item.price * item.stock), 0);
    
// console.log(`Total value: $${totalValue.toFixed(2)}`);


// let myData = {
//     name: "Brad",
//     weather: "sunny",
//     printMessages: function() {
//         console.log(`Hello, ${this.name}!`);
//         console.log(`Today is ${this.weather}.`);
//     }
// };

// myData.printMessages();


// class MyClass {
    
//     constructor(name, weather) {
//         this.name = name;
//         this._weather = weather;
//     }
    
//     set weather(value) {
//         this._weather = value;
//     }
    
//     get weather() {
//         return `Today is ${this._weather}.`;
//     }
    
//     printMessages() {
//         console.log(`Hello, ${this.name}!`);
//         console.log(this.weather);
//     }
// }

// class MySubClass extends MyClass {
    
//     constructor(name, weather, city) {
//         super(name, weather);
//         this.city = city;
//     }
    
//     printMessages() {
//         super.printMessages();
//         console.log(`You are in ${this.city}.`);
//     }
// }

// let myData = new MySubClass("Brad", "sunny", "Hobart");
// myData.printMessages();

import { Name, WeatherLocation } from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";
import { TempConverter } from "./tempConverter";

let name = new Name("Brad", "Francis");
let loc = new WeatherLocation("sunny", "Hobart");
let other = new OtherName();

// let tuple: [string, string, string];
// tuple = ["Hobart", "sunny", TempConverter.convertCtoF("3.3")];

let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TempConverter.convertTo("38", "C")];
cities["Paris"] = ["sunny", TempConverter.convertTo("52", "C")];
cities["Berlin"] = ["snowing", TempConverter.convertTo("23")];


// console.log(name.nameMessage);
// console.log(loc.weatherMessage);
// console.log(other.message);
// console.log(`it is ${tuple[2]} degrees F and ${tuple[1]} in ${tuple[0]}.`);

for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}