import { Component, Input } from '@angular/core';

import {Hero} from "../../../entity/hero";

@Component({
    moduleId: module.id,
    selector: 'my-hero-number',
    templateUrl: '../footer/footer.html',
})

export class HeroNumberComponent {
    @Input()
    hero: Hero;
}