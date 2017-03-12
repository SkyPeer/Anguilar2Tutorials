import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Hero} from "../../entity/hero";
import { HeroService } from './hero.service';

/*
@Component({
  const HEROES: Hero[] = [
  templateUrl: 'page3.html',
  styleUrls: ['page3.css']
})
export class Page3 {
    //title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}    */

@Component({
/*    selector: 'my-app', */
    styleUrls: ['page3.css'],
    providers: [HeroService]
})
export class Page3 implements OnInit {
    /* title = 'Tour of Heroes'; */
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