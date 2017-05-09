"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var page4_1 = require("./page4/page4");
var page3_1 = require("./page3/page3");
var page2_1 = require("./page2/page2");
var page1_1 = require("./page1/page1");
var core_1 = require("@angular/core");
var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: page1_1.Page1 },
    { path: 'page2', component: page2_1.Page2 },
    { path: 'page3', component: page3_1.Page3 },
    { path: 'page4', component: page4_1.Page4 },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUQ7QUFDckQsdUNBQW9DO0FBQ3BDLHVDQUFvQztBQUNwQyx1Q0FBb0M7QUFDcEMsdUNBQW9DO0FBQ3BDLHNDQUF1QztBQUV2QyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFDO0lBQ2xELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0lBQ2pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBSyxFQUFDO0NBQ3BDLENBQUM7QUFPRixJQUFhLGFBQWE7SUFBMUI7SUFDQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLGFBQWE7SUFMekIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUMxQixDQUFDOztHQUVXLGFBQWEsQ0FDekI7QUFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQYWdlNH0gZnJvbSBcIi4vcGFnZTQvcGFnZTRcIjtcclxuaW1wb3J0IHtQYWdlM30gZnJvbSBcIi4vcGFnZTMvcGFnZTNcIjtcclxuaW1wb3J0IHtQYWdlMn0gZnJvbSBcIi4vcGFnZTIvcGFnZTJcIjtcclxuaW1wb3J0IHtQYWdlMX0gZnJvbSBcIi4vcGFnZTEvcGFnZTFcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge3BhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3BhZ2UxJywgcGF0aE1hdGNoOidmdWxsJ30sXHJcbiAgICB7cGF0aDogJ3BhZ2UxJywgY29tcG9uZW50OiBQYWdlMX0sXHJcbiAgICB7cGF0aDogJ3BhZ2UyJywgY29tcG9uZW50OiBQYWdlMn0sXHJcbiAgICB7cGF0aDogJ3BhZ2UzJywgY29tcG9uZW50OiBQYWdlM30sXHJcbiAgICB7cGF0aDogJ3BhZ2U0JywgY29tcG9uZW50OiBQYWdlNH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcclxufSJdfQ==