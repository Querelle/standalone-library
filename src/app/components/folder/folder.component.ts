import { Component } from "@angular/core";
import { CardComponent } from "@app/components/card/card.component";
import { FolderService } from "@app/components/folder/folder.service";

@Component({
    standalone: true,
    selector: 'sta-folder',
    templateUrl: 'folder.component.html',
    imports: [
        CardComponent
    ],
    styleUrls: ['folder.component.scss'],
    providers: [FolderService]
})
export class FolderComponent {}