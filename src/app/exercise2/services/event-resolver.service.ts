import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Event} from '../models/event.model';
import {EventService} from './event.service';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class EventResolver implements Resolve<Event> {
  constructor(private eventService: EventService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Event> {
    return this.eventService.getEvent(route.params.id)
      .pipe(
        map(event => event)
      );
  }
}
