import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";

@Injectable()
export class FolderService {
    private activeFile: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public files: number[] = [];

    public setFile(): number {
        this.files.push(this.files.length + 1)
        return this.files.length
    }

    public isActive(index: number): Observable<boolean> {
        return this.activeFile.pipe(map(current => current === index))
    }

    public setActive(index: number): void {
       this.activeFile.next(index)
    }
}