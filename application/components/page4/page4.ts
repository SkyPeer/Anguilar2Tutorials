import { Component } from '@angular/core';
import {Hero} from "../page3/hero";
/*import {Hero} from "./hero";*/

@Component({
    moduleId: module.id, /*Зачем оно надо ???*/
    //selector: 'my-app',  /*почему комментируем?*/
    templateUrl: 'page4.html',
    styleUrls: ['page4.css']

})
export class Page4 {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}