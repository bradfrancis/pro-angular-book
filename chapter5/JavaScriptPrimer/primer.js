var hello = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello, " + name + ".");
    console.log("It is " + weather + " " + partOfDay() + ".");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
var partOfDay = function (timestamp) {
    if (timestamp === void 0) { timestamp = new Date(); }
    var currentHour = (timestamp.getHours() + 12) % 24;
    var dayPart = "";
    if (currentHour >= 19 || currentHour <= 5) {
        dayPart = "tonight";
    }
    else if (currentHour >= 17) {
        dayPart = "this evening";
    }
    else if (currentHour >= 12) {
        dayPart = "this afternoon";
    }
    else {
        dayPart = "this morning";
    }
    return dayPart;
};
hello('Brad', "overcast", "one", "two", "three");
var myArray = [100, "Brad", true];
myArray.forEach(function (value, index) {
    console.log("Index " + index + ": " + value);
});
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
