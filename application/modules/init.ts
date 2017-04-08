import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Layout} from  '../components/layout/layout'
import {RoutingModule} from "../components/routes";
import {Page3} from "../components/page3/page3";
import {Page2} from "../components/page2/page2";
import {Page1} from "../components/page1/page1";
import {Page4} from "../components/page4/page4";
//import {FooterComponent} from "./.";
import {HeroDetailComponent} from "../components/page4/detail/detail";
import {HeroNumberComponent} from "../components/page4/footer/footer";
import {HeroService} from "../components/page4/hero.service";

import {Page5} from "../components/page5/page5";
//import {AppModule} from "../components/page5/app.module";
import {DashboardComponent} from "../components/page5/dashboard.component";
import {HeroService2} from "../components/page5/hero.service";
import {HeroDetailComponent2} from "../components/page5/hero-detail.component";
import {HeroesComponent2} from "../components/page5/heroes.component"
@NgModule({
    // declarations: [Footercomponent],
    declarations: [Layout, Page1, Page2, Page3, Page4, HeroDetailComponent, HeroNumberComponent, DashboardComponent, HeroDetailComponent2, HeroesComponent2, Page5],
    imports: [BrowserModule, RoutingModule, FormsModule],
    providers:[HeroService, HeroService2, Page5],
    bootstrap: [Layout]
})
export class InitModule {

}