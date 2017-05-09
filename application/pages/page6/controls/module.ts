import {NgModule} from "@angular/core";
import {HeroFiltered} from "./hero.filtered";
import {ShowHero} from "./hero.show";
import {DropDownlistSelectedValue} from "./dropdownlist";
import {HeroF} from "./hero.f";

@NgModule({
    declarations:[
        HeroFiltered,ShowHero,DropDownlistSelectedValue,HeroF,HeroFiltered
    ],
    exports:[
        HeroFiltered,ShowHero,DropDownlistSelectedValue,HeroF,HeroFiltered

    ],
    imports:[

    ],

})

export class Page6ControlsModule{

}