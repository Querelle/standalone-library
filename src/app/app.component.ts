import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone-library';
  @HostBinding('class') class = "light"

  public cliccami() {
    console.log('clicked');
  }
}
