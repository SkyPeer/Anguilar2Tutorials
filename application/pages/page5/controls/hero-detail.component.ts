import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from 'entity/hero';
import {HeroService} from "providers/hero";


@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent2 implements OnInit {
  hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

