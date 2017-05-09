import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Layout} from  'layout/layout'

import {RoutingModule} from "pages/routes";

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "providers/in-memory-data.service";
import {HeroService} from "providers/hero";
import {ControlsModule} from "controls/module";
import {PagesModule} from "pages/module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
        ControlsModule,
        PagesModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations:
        [
        Layout
        ],
    providers:[HeroService],
    bootstrap: [Layout]
})
export class AppModule {

}