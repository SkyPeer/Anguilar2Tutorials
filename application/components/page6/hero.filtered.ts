import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {Hero} from "../../entity/hero";
import {HeroService} from '../../entity/hero.service';

@Component({
    selector: 'my-hero-filter',
    moduleId: module.id,
    styleUrls: ['../page4/page4.css'],
    templateUrl: 'hero.filtered.html'

})
export class HeroFiltered implements OnInit {

    /*title = 'Tour of Heroes'; */
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {
    }
    getHeroes(): void {
        let promise = this.heroService.getHeroes();
        promise.then(heroes => {
            //this.heroes = heroes.sort(heroSort)
            this.heroes = heroes.filter(heroFilter)
        });
    }
    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
function heroFilter(f: Hero){
    if (f.gender == 'M'){
        return f;
    }
}




/*           SORTING
function heroSort(a: Hero, b: Hero) {
    if (a.gender > b.gender) {
        return 1;
    }
    if (b.gender < b.gender) {
        return -1;
    }
    console.log(a);
    return 0;

        }
        */




/* function responseHandler(heroes){
 return  bla-bla
 }
 heroes =>  bla-bla */