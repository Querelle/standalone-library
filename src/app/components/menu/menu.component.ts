import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { NgIf, NgSwitch, NgSwitchCase } from "@angular/common";
import { OverlayComponent } from "@app/components/overlay/overlay.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { menuAnimation } from "@app/components/menu/animations";

@Component({
    standalone: true,
    selector: 'sta-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.scss'],
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgIf,
        OverlayComponent,
        BrowserAnimationsModule
    ],
    animations: [ menuAnimation ],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
    @Input() opened: boolean = false;
    @Input() fixed: boolean = false;
    @Input() backdrop: boolean = false;
    @Output() isOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

    public open() {
        this.opened = !this.opened;
        this.isOpened.emit(this.opened);
    }
}