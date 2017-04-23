import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl: "cartDetail.component.html",
    moduleId: module.id
})
export class CartDetailComponent {

    constructor(public cart: Cart) { }
}