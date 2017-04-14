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