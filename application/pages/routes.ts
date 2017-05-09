import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Page6} from "pages/page6/page6";
import {Page5} from "pages/page5/page5";
import {Page4} from "pages/page4/page4";
import {Page3} from "pages/page3/page3";
import {Page2} from "pages/page2/page2";
import {Page1} from "pages/page1/page1";
import { DashboardComponent }   from 'pages/page5/controls/dashboard.component';
import { HeroesComponent }      from 'pages/page5/controls/heroes.component';
import { HeroDetailComponent2 }  from 'pages/page5/controls/hero-detail.component';
import {HeroF} from 'pages/page6/controls/hero.f';
import {HeroFilter} from 'pages/page6/controls/hero.filter';
import {HeroFiltered} from 'pages/page6/controls/hero.filtered';
import {DropDownlistSelectedValue} from 'pages/page6/controls/dropdownlist'
const routes: Routes = [
    {path: '', redirectTo: '/page1', pathMatch:'full'},
    {path: 'page1', component: Page1},
    {path: 'page2', component: Page2},
    {path: 'page3', component: Page3},
    {path: 'page4', component: Page4},
    {path: 'page5', component: Page5,children:[
        { path: 'detail/:id', component: HeroDetailComponent2 },
        { path: 'heroes',     component: HeroesComponent },
        { path: 'dashboard',  component: DashboardComponent },
    ]},
    {path: 'page6', component: Page6},
    {path: 'herof', component: HeroF},
    {path: 'herofilter', component: HeroFilter},
    {path: 'herofiltered', component: HeroFiltered},
    {path: 'dropdownlistselectedvalue', component: DropDownlistSelectedValue}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}