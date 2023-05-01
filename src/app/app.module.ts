import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./components/card/card.component";
import {
  CardAvatarDirective,
  CardSubtitleDirective,
  CardTitleDirective
} from "./components/card/directives/card-header.directive";
import { CardHeaderComponent } from "@app/components/card/card-header.component";
import { ButtonComponent } from "@app/components/button/button.component";
import { MenuComponent } from "@app/components/menu/menu.component";
import { FolderComponent } from "@app/components/folder/folder.component";
import { FileComponent } from "@app/components/folder/file.component";

const COMPONENTS = [CardComponent, CardHeaderComponent, ButtonComponent, MenuComponent];
const DIRECTIVES = [CardTitleDirective, CardSubtitleDirective, CardAvatarDirective]
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ...COMPONENTS,
        ...DIRECTIVES,
        FolderComponent,
        FileComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
