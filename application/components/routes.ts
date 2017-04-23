import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {Page5} from "./page5/page5";
import {Page4} from "./page4/page4";
import {Page3} from "./page3/page3";
import {Page2} from "./page2/page2";
import {Page1} from "./page1/page1";
import { DashboardComponent }   from './page5/dashboard.component';
import { HeroesComponent2 }      from './page5/heroes.component';
import { HeroDetailComponent2 }  from './page5/hero-detail.component';



const routes: Routes = [
    {path: '', redirectTo: '/page1', pathMatch:'full'},
    {path: 'page1', component: Page1},
    {path: 'page2', component: Page2},
    {path: 'page3', component: Page3},
    {path: 'page4', component: Page4},
    {path: 'page5', component: Page5},

    { path: 'detail/:id', component: HeroDetailComponent2 },
    { path: 'heroes',     component: HeroesComponent2 },
    { path: 'dashboard',  component: DashboardComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}