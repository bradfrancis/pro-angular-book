let hello = (name, weather="raining", ...extraArgs) => { 
    console.log(`Hello, ${name}.`);
    console.log(`It is ${weather} ${partOfDay()}.`);
    
    for(let i = 0; i < extraArgs.length; i++) {
        console.log(`Extra Arg: ${extraArgs[i]}`);
    }
};

let partOfDay = (timestamp=new Date()) => {
    let currentHour = (timestamp.getHours() + 12) % 24;
    let dayPart = "";
    
    if (currentHour >= 19 || currentHour <= 5) {
        dayPart = "tonight"
    } else if (currentHour >= 17) {
        dayPart = "this evening"
    } else if (currentHour >= 12) {
        dayPart = "this afternoon"
    } else {
        dayPart = "this morning"
    }
    
    return dayPart;
}

hello('Brad', "overcast", "one", "two", "three")

let myArray = [100, "Brad", true];
myArray.forEach((value, index) => {
    console.log(`Index ${index}: ${value}`)
});

let products = [
    {name: "Hat", price: 24.5, stock: 10},
    {name: "Kayak", price: 289.99, stock: 1},
    {name: "Soccer Ball", price: 10, stock: 0},
    {name: "Running Shoes", price: 116.50, stock: 20}
]

let totalValue = products
                    .filter(item => item.stock > 0)
                    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log(`Total value: $${totalValue.toFixed(2)}`);