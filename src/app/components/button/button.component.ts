import {
    AfterViewInit,
    Component,
    ElementRef, EventEmitter,
    Input,
    Output,
    Renderer2,
    ViewChild,
    ViewEncapsulation
} from "@angular/core";

export enum ButtonColor{
    'primary',
    'secondary'
}
@Component({
    standalone: true,
    selector: 'sta-button',
    template: `
        <button #sta_button (click)="emitClick()">
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['button.component.scss'],
})
export class ButtonComponent implements AfterViewInit {
    constructor(private renderer: Renderer2) {}
    @Input() disabled: boolean = false;
    @Input() color: keyof typeof ButtonColor = 'primary';
    @ViewChild('sta_button') button: ElementRef | undefined = undefined;
    @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

    ngAfterViewInit() {
        if (!this.disabled) {
            this.renderer.removeClass(this.button?.nativeElement, `sta-button__disabled`)
            this.renderer.addClass(this.button?.nativeElement, `sta-button__${this.color}`)
        } else {
            this.renderer.removeClass(this.button?.nativeElement, `sta-button__${this.color}`)
            this.renderer.addClass(this.button?.nativeElement, `sta-button__disabled`)
        }
    }

    public emitClick() {
        if (!this.disabled) this.clicked.emit()
    }
}