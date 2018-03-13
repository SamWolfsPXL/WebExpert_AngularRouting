import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../services/event.service';
import {Event} from '../models/event.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  createForm: FormGroup;
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    let titleControl = new FormControl('', Validators.required);
    let dateControl = new FormControl('', Validators.required);
    let addressControl = new FormControl('', Validators.required);
    this.createForm = new FormGroup({
      title: titleControl,
      date: dateControl,
      address: addressControl
    });
  }

  submitForm(formValues) {
    let event = new Event(
      null,
      formValues.title,
      formValues.date,
      formValues.address
    );
    this.eventService.addEvent(event).subscribe();
    this.router.navigate(['/events']);
  }

}
