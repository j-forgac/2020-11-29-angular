import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private visibile = true;
  @Output() visibilityChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.visibile = !this.visibile;
    this.visibilityChanged.emit(this.visibile);
  }
}
