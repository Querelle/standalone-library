import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { FolderService } from "@app/components/folder/folder.service";
import { Observable, Subject, takeUntil } from "rxjs";
import { AsyncPipe, NgIf } from "@angular/common";

@Component({
    standalone: true,
    selector: 'sta-file',
    template: `
        <div class="sta-file">
            <div (click)="select()">
                <ng-content select="[tab]"></ng-content>
            </div>
            <div *ngIf="active | async">
                <ng-content select="[content]"></ng-content>
            </div>
        </div>
    `,
    imports: [
        NgIf,
        AsyncPipe
    ]
})
export class FileComponent implements OnInit {
    private readonly _index: number | undefined = undefined;
    constructor(private folderService: FolderService) {
        this._index = this.folderService.setFile();
    }
    public active: Observable<boolean> | undefined = undefined;

    ngOnInit() {
        this.active = this.folderService.isActive(this._index!);
    }

    public select() {
        this.folderService.setActive(this._index!)
    }

}