import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger } from "@angular/animations";

export const menuAnimation: AnimationTriggerMetadata = trigger('switchMenu', [
    transition('open <=> closed', [
        animate('180ms linear', keyframes([
            style({ transform: 'skew(30deg, 20deg)' }),
            style({ transform: 'skew(-30deg, -20deg)' }),
        ])),
    ]),
]);