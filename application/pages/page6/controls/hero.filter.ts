import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {Hero} from "entity/hero";
import {HeroService} from "../../../providers/hero";

@Component({
    moduleId: module.id,
    styleUrls: ['../page4/page4.css'],
    templateUrl: 'hero.filter.html'

})
export class HeroFilter implements OnInit {
    /*title = 'Tour of Heroes'; */
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }


    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}