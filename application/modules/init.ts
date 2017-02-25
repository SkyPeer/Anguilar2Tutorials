import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {Layout} from  '../components/layout/layout'
import {RoutingModule} from "../components/routes";
import {Page3} from "../components/page3/page3";
import {Page2} from "../components/page2/page2";
import {Page1} from "../components/page1/page1";
import {Page4} from "../components/page4/page4";
import {FooterComponent} from "../components/page3/footer/footer";
import {HeroDetailComponent} from "../components/page3/detail/detail";

@NgModule({
    declarations: [Layout, Page1, Page2, Page3, Page4, FooterComponent, HeroDetailComponent],
    imports: [BrowserModule, RoutingModule, FormsModule],
    bootstrap: [Layout]
})
export class InitModule {

}


