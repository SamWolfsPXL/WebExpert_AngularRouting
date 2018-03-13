import { Component, OnInit } from '@angular/core';
import {Event} from '../models/event.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../services/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  id: string;
  constructor(private route: ActivatedRoute, private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.event = this.route.snapshot.data['event'];
    console.log(this.event);
    if (!this.event) {
      this.router.navigate(['404']);
    }
  }

}
