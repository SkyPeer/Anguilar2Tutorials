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
    dlselectedvalue: DropDownlistSelectedValue;
}
