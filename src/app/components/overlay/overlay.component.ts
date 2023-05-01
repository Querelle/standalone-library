import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    standalone: true,
    selector: 'sta-overlay',
    templateUrl: 'overlay.component.html',
    styleUrls: ['overlay.component.scss']
})
export class OverlayComponent {
    @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
}
