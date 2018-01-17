import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "SideDrawerItem",
    moduleId: module.id,
    templateUrl: "./side-drawer-item.component.html",
    styleUrls: ["./side-drawer-item.component.css"]
})
export class SideDrawerItemComponent implements OnInit {
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
