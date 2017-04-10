import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Layout} from  '../components/layout/layout'
import {RoutingModule} from "../components/routes";
import {Page3} from "../components/page3/page3";
import {Page2} from "../components/page2/page2";
import {Page1} from "../components/page1/page1";
import {Page4} from "../components/page4/page4";
import {Page5} from "../components/page5/page5";
//import {FooterComponent} from "./.";
import {HeroDetailComponent} from "../components/page4/detail/detail";
import {HeroNumberComponent} from "../components/layout/footer/footer";
import {HeroService} from "../entity/hero.service";
import {DashboardComponent} from "../components/page5/dashboard.component";
import {HeroDetailComponent2} from "../components/page5/hero-detail.component";
import {HeroesComponent2} from "../components/page5/heroes.component"
@NgModule({
    declarations: [Layout, Page1, Page2, Page3, Page4, Page5, HeroDetailComponent, HeroNumberComponent, DashboardComponent, HeroDetailComponent2, HeroesComponent2],
    imports: [BrowserModule, RoutingModule, FormsModule],
    providers:[HeroService, Page5],
    bootstrap: [Layout]
})
export class InitModule {

}