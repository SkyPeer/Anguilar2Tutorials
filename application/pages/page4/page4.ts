import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Hero} from "entity/hero";
import { HeroService } from 'providers/hero';

@Component({
    moduleId: module.id,
    styleUrls: ['page4.css'],
    templateUrl: 'page4.html'

})
export class Page4 implements OnInit {
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