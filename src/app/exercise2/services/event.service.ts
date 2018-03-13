import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {Event} from '../models/event.model';

const BASE_URL = 'https://eventmanager-865ef.firebaseio.com/';

@Injectable()
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<Event[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.get<Event[]>(BASE_URL + 'events.json', httpOptions)
      .pipe(
        map(this.parseData),
        catchError(this.onError)
      );
  }

  getEvent(id: string): Observable<Event> {
    return this.httpClient.get<Event>(BASE_URL + 'events/' + id + '.json')
      .pipe(
        map(data => new Event(
          id,
          data.title,
          data.date,
          data.address
        ))
      );
  }

  deleteEvent(id: string): Observable<{}> {
    return this.httpClient.delete(BASE_URL + 'events/' + id + '.json')
      .pipe(
        catchError(this.onError)
      );
  }

  addEvent(event: Event): Observable<{}> {
    return this.httpClient.post(BASE_URL + 'events.json', event)
      .pipe(
        catchError(this.onError)
      );
  }

  parseData(rawData: any[]): Event[] {
    let events =  Object.keys(rawData).map(key => {
      let event = rawData[key];
      return new Event(
        key,
        event.title,
        event.date,
        event.address
      );
    });
    console.log(events);
    return events;
  }

  onError(response: Response): Observable<any> {
    let error = `Error ${response.status}: ${response.statusText}`;
    console.error(error);
    return Observable.throw(error);
  }
}
