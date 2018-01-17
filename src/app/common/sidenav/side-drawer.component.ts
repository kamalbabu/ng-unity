import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "SideDrawer",
    moduleId: module.id,
    templateUrl: "./side-drawer.component.html",
    styleUrls: ["./side-drawer.component.css"]
})
export class SideDrawerComponent implements OnInit {

    @Input() selectedPage: string;

    ngOnInit(): void {
    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}
