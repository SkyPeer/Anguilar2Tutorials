import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Hero} from "../../entity/hero";
import { HeroService } from '../../entity/hero.service';

@Component({
    moduleId: module.id,
    styleUrls: ['../page4/page4.css'],
    templateUrl: 'hero.m.html'

})
export class HeroM implements OnInit {
    /*title = 'Tour of Heroes'; */
    heroes: Hero[];
    selectedHeroId: 11;
    constructor(private heroService: HeroService) { }


    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }


    ngOnInit(): void {
        this.getHeroes();
    }



/*    onSelect(hero: Hero): void {
        this.selectedHeroGender = 'M';

    } */
}