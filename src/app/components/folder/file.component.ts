import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FolderService } from "@app/components/folder/folder.service";
import { Observable } from "rxjs";
import { AsyncPipe, NgClass, NgIf } from "@angular/common";

@Component({
    standalone: true,
    selector: 'sta-file',
    template: `
        <div class="sta-file">
            <div (click)="select()" class="sta-file__tab" [ngClass]="(active | async) ? 'sta-file__tab_active' : 'sta-file__tab_holding'" #tab>
                <ng-content select="[tab]"></ng-content>
                <span class="material-icons">close</span>
            </div>
            <div [hidden]="!(active | async)" class="sta-file__content" #content>
                <ng-content select="[content]"></ng-content>
            </div>
        </div>
    `,
    imports: [
        NgIf,
        AsyncPipe,
        NgClass
    ],
    styleUrls: ['file.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FileComponent implements OnInit {
    private readonly _index: number | undefined = undefined;
    @ViewChild('tab', {read: ElementRef, static: true}) tab: ElementRef | undefined = undefined;
    @ViewChild('content', {read: ElementRef, static: true}) content: ElementRef | undefined = undefined;
    constructor(private folderService: FolderService) {
        this._index = this.folderService.setFile();
    }
    public active: Observable<boolean> | undefined = undefined;

    ngOnInit() {
        console.log(this.content?.nativeElement?.innerText)
        this.active = this.folderService.isActive(this._index!);
    }

    public select() {
        this.folderService.setActive(this._index!)
    }

    protected readonly undefined = undefined;
}