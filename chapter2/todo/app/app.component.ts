import { Component } from "@angular/core";
import { Model, ToDoItem } from "./model";

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})
 
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getToDoItems() {
        return this.model.items.filter(item => !item.done);
    }

    addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new ToDoItem(newItem, false));
        }
    }
}