import { Component, Input } from '@angular/core';
import {Hero} from "entity/hero";

@Component({
    moduleId: module.id,
    selector: 'my-hero-show',
    templateUrl: 'hero.show.html',
})

export class ShowHero {
    @Input()
    hero: Hero;
}