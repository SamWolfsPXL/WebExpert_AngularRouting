import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.eventService.deleteEvent(this.route.snapshot.params['id']).subscribe();
  }

}
