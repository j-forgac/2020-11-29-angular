import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private sidebarVisibility = true;

  public recieved(visibility: boolean): void {
    this.sidebarVisibility = visibility;
  }
}
