import {NgModule} from "@angular/core";
import {HeroSearchService} from "hero-search.service";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent2} from "./hero-detail.component";
import {HeroSearchComponent} from "./hero-search.component";
import {HeroesComponent} from "./heroes.component";
@NgModule({
    declarations:[
    DashboardComponent,HeroDetailComponent2,HeroSearchComponent,HeroesComponent,
    ],
    exports:[
        DashboardComponent,HeroDetailComponent2,HeroSearchComponent,HeroesComponent,

    ],
    imports:[

    ],

    providers:[
      HeroSearchService
    ],
})

export class Page5ControlsModule{

}
