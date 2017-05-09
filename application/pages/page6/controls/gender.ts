import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gender',
    templateUrl: 'gender.html',
})

export class GenderComponent {
    selectedGender: string;

    @Output()
    onSelectedGender = new EventEmitter<string>();

    select(){
        console.log(1)
    }
}