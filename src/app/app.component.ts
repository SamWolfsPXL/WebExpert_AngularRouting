import {Component, OnInit} from '@angular/core';
import {EventService} from './exercise2/services/event.service';
import {Event} from './exercise2/models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: Event[] = [];
  title = 'app';
  constructor(private eventService: EventService) {}

  ngOnInit() {
  }
}
