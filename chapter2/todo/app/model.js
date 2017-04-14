"use strict";
var Model = (function () {
    function Model() {
        this.user = "Brad";
        this.items = [
            new ToDoItem("Buy Flowers", false),
            new ToDoItem("Get Shoes", false),
            new ToDoItem("Collect Tickets", true),
            new ToDoItem("Call Joe", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var ToDoItem = (function () {
    function ToDoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
/* ES5 version
var model = {
    user: "Brad",
    items: [
        { action: "Buy Flowers", done: false},
        { action: "Get Shoes", done: false},
        { action: "Collect Tickets", done: true},
        { action: "Call Joe", done: false},
        { action: "Drink Beer and Watch Footy", done: false}
    ]
};*/ 
