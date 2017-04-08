import { Component } from '@angular/core';
import {Hero} from "../../entity/hero";

@Component({
    moduleId: module.id,
    //selector: 'my-app',
    templateUrl: 'page3.html',
    styleUrls: ['page3.css']

})
export class Page3 {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm',
        telnumb: '92728728923'
    };
}