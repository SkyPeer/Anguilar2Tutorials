import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Layout} from  '../components/layout/layout'

import {RoutingModule} from "../components/routes";
import {Page1} from "../components/page1/page1";
import {Page2} from "../components/page2/page2";
import {Page3} from "../components/page3/page3";
import {Page4} from "../components/page4/page4";
import {Page5} from "../components/page5/page5";
import {Page6} from "../components/page6/page6";
import {HeroF} from "../components/page6/hero.f";
import {ShowHero} from "../components/page6/hero.show";
import {HeroFilter} from "../components/page6/hero.filter";

import {HeroDetailComponent} from "../components/page4/detail/detail";
import {HeroNumberComponent} from "../components/layout/footer/footer";
import {HeroService} from "../entity/hero.service";


import {DashboardComponent} from "../components/page5/dashboard.component";
import {HeroDetailComponent2} from "../components/page5/hero-detail.component";
import {HeroesComponent} from "../components/page5/heroes.component"

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../components/page5/in-memory-data.service';
import { HeroSearchComponent }  from '../components/page5/hero-search.component';
import {HeroFiltered} from "../components/page6/hero.filtered";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations:
        [
        Layout, Page1, Page2, Page3, Page4, HeroF, Page5, Page6, HeroFilter, HeroFiltered, ShowHero, HeroDetailComponent, HeroNumberComponent, DashboardComponent, HeroDetailComponent2, HeroesComponent, HeroSearchComponent
        ],
    providers:[HeroService, Page5],
    bootstrap: [Layout]
})
export class InitModule {

}