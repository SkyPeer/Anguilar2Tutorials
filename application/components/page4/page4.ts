import { Component } from '@angular/core';
import {Hero} from "../../entity/hero";

@Component({
    moduleId: module.id,
    //selector: 'my-app',
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