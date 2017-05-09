import { Component } from '@angular/core';

/* @Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'page5.html',
    styleUrls: ['./page5.css'],
})
export class Page5 {
    title = 'Tour of Heroes (With router)';
} */

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'page6.html',
    styleUrls: ['../page5/page5.css']
})
export class Page6
{
    title = 'Tour of Heroes (sorted by gender)'
}
