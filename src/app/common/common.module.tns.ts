import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { SideDrawerComponent } from "./sidenav/side-drawer.component";
import { SideDrawerItemComponent } from "./sidenav/side-drawer-item/side-drawer-item.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideDrawerComponent,
        SideDrawerItemComponent
    ],
    exports: [
        SideDrawerComponent,
        SideDrawerItemComponent,
        NativeScriptUISideDrawerModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CommonModule { }
