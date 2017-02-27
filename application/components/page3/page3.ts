import { Component } from '@angular/core';
import {Hero} from "../../entity/hero";

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice', telnumb: '+2 31232323-20', },
    { id: 12, name: 'Narco', telnumb: '+3 231232323-12', },
    { id: 13, name: 'Bombasto', telnumb: '+1 231232323-13', },
    { id: 14, name: 'Celeritas', telnumb: '+4 231232323-14', },
    { id: 15, name: 'Magneta', telnumb: '+7 231232323-15', },
    { id: 16, name: 'RubberMan', telnumb: '+1 31232323-20', },
    { id: 17, name: 'Dynama', telnumb: '+0 123231-17', },
    { id: 18, name: 'Dr IQ', telnumb: '+0 1234567-18', },
    { id: 19, name: 'Magma', telnumb: '+1 234347-19', },
    { id: 20, name: 'Tornado', telnumb: '+2 31232323-20', }
];

@Component({
    moduleId: module.id,
    //selector: 'my-app',
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
}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 *//**
 * Created by admin on 25.12.2016.
 */
