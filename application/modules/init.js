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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var layout_1 = require("../components/layout/layout");
var routes_1 = require("../components/routes");
var page3_1 = require("../components/page3/page3");
var page2_1 = require("../components/page2/page2");
var page1_1 = require("../components/page1/page1");
var page4_1 = require("../components/page4/page4");
var InitModule = (function () {
    function InitModule() {
    }
    return InitModule;
}());
InitModule = __decorate([
    core_1.NgModule({
        declarations: [layout_1.Layout, page1_1.Page1, page2_1.Page2, page3_1.Page3, page4_1.Page4],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule, forms_1.FormsModule],
        bootstrap: [layout_1.Layout]
    }),
    __metadata("design:paramtypes", [])
], InitModule);
exports.InitModule = InitModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF1QztBQUN2Qyw4REFBd0Q7QUFDeEQsd0NBQStDO0FBRS9DLHNEQUFtRDtBQUNuRCwrQ0FBbUQ7QUFDbkQsbURBQWdEO0FBQ2hELG1EQUFnRDtBQUNoRCxtREFBZ0Q7QUFDaEQsbURBQWdEO0FBT2hELElBQWEsVUFBVTtJQUF2QjtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksVUFBVTtJQUx0QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxlQUFNLEVBQUUsYUFBSyxFQUFFLGFBQUssRUFBRSxhQUFLLEVBQUUsYUFBSyxDQUFDO1FBQ2xELE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUUsc0JBQWEsRUFBRSxtQkFBVyxDQUFDO1FBQ3BELFNBQVMsRUFBRSxDQUFDLGVBQU0sQ0FBQztLQUN0QixDQUFDOztHQUNXLFVBQVUsQ0FFdEI7QUFGWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXHJcbmltcG9ydCB7Um91dGluZ01vZHVsZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvcm91dGVzXCI7XHJcbmltcG9ydCB7UGFnZTN9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2UzL3BhZ2UzXCI7XHJcbmltcG9ydCB7UGFnZTJ9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2UyL3BhZ2UyXCI7XHJcbmltcG9ydCB7UGFnZTF9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2UxL3BhZ2UxXCI7XHJcbmltcG9ydCB7UGFnZTR9IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2U0L3BhZ2U0XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbTGF5b3V0LCBQYWdlMSwgUGFnZTIsIFBhZ2UzLCBQYWdlNF0sXHJcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgUm91dGluZ01vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gICAgYm9vdHN0cmFwOiBbTGF5b3V0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pdE1vZHVsZSB7XHJcblxyXG59XHJcblxyXG5cclxuIl19