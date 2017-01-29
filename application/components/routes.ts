import {Routes, RouterModule} from "@angular/router";
import {Page4} from "./page4/page4";
import {Page3} from "./page3/page3";
import {Page2} from "./page2/page2";
import {Page1} from "./page1/page1";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {path: '', redirectTo: '/page1', pathMatch:'full'},
    {path: 'page1', component: Page1},
    {path: 'page2', component: Page2},
    {path: 'page3', component: Page3},
    {path: 'page4', component: Page4},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}