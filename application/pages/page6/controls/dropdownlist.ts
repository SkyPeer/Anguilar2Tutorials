import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'dropdownlist-selected-value',
    templateUrl: 'dropdownlist.html',
    styleUrls: ['../page5/page5.css']
})
export class DropDownlistSelectedValue
{
    @Input()
    dlselectedvalue: number;

    foo(){
        console.log(this.dlselectedvalue)
    }
}
function dropdownlistsum(a: number) {

    if (a == 1) {
        a + 100;
    }
    if (a == 2) {
        a + 200;
    }
    return a;
}
