import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'muj prvni angular test';
  counter = 0;

  increaseCounter(): void {
    this.counter++;
  }
}
