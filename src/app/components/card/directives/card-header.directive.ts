import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from "@angular/core";

/**
 *
 */
@Directive({
    standalone: true,
    selector: '[card-title]',
})
export class CardTitleDirective {
    @HostBinding('class') class: string = 'card-header__title title';
}

/**
 *
 */
@Directive({
    standalone: true,
    selector: '[card-subtitle]',
})
export class CardSubtitleDirective {
    @HostBinding('class') class: string = 'card-header__subtitle subtitle';
}

/**
 *
 */
@Directive({
    standalone: true,
    selector: '[card-avatar]',
})
export class CardAvatarDirective implements OnInit {
    @Input('card-avatar') position: string | undefined = undefined;
    @HostBinding('class') class: string = 'card-header__avatar avatar';

    private cardHeader: ElementRef | undefined = undefined;
    constructor(private el: ElementRef, private renderer: Renderer2) {
    }
    ngOnInit() {
        this.cardHeader = this.el.nativeElement.closest('.card-header');
        if (this.position === 'right') this.renderer.addClass(this.cardHeader, 'right');
        else this.renderer.addClass(this.cardHeader, 'left');
    }
}