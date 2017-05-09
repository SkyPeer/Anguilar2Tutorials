import {NgModule} from "@angular/core";
import {Page6} from "./page6/page6";
import {Page5} from "./page5/page5";
import {Page4} from "./page4/page4";
import {Page3} from "./page3/page3";
import {Page2} from "./page2/page2";
import {Page1} from "./page1/page1";

@NgModule({
    declarations:[
        Page1, Page2, Page3, Page4,  Page5,  Page6,
    ],
    exports:[
        Page1, Page2, Page3, Page4,  Page5,  Page6,
    ],
    imports:[
    ]
})
export class PagesModule {

}
