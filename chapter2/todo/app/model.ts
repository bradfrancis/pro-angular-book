export class Model {
    user;
    items;
    
    constructor() {
        this.user = "Brad";
        this.items = [
            new ToDoItem("Buy Flowers", false),
            new ToDoItem("Get Shoes", false),
            new ToDoItem("Collect Tickets", true),
            new ToDoItem("Call Joe", false)
        ]
    }
}

export class ToDoItem {
    action;
    done;
    
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}


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