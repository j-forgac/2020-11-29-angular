import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {of} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private visibile = true;
  search = '';

  @Output() visibilityChanged = new EventEmitter<boolean>();
  @Input() menu = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.visibile = !this.visibile;
    this.visibilityChanged.emit(this.visibile);
  }

  /* metoda neaplikována kvůli datalistu
  printResults(): void {
    let myVal: string;
    for (const [key, value] of Object.entries(this.menu)) {
      myVal = String(value).toLowerCase();
      if (myVal.includes(this.search.toLowerCase())){
        console.log(value);
      }
    }
    */
}
