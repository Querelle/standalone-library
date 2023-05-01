import { Component, ContentChild, Type, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
    standalone: true,
    selector: 'sta-card-header',
    template: `
        <div class="card-header">
            <div class="card-header__text">
                <ng-content select="[card-title]"></ng-content>
                <ng-content select="[card-subtitle]"></ng-content>
            </div>
            <div class="card-header__image">
                <ng-content select="[card-avatar]"></ng-content>
            </div>
            <hr class="card-header__divider">
        </div>
    `
})
export class CardHeaderComponent {}