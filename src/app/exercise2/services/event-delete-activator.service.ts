import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class EventDeleteActivator implements CanActivate {
  constructor() {}

  canActivate() {
    return confirm('Are you sure you want to delete this event?');
  }

}
