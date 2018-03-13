import {EventListComponent} from './exercise2/event-list/event-list.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './exercise2/create-event/create-event.component';
import {EventDetailComponent} from './exercise2/event-detail/event-detail.component';
import {EventResolver} from './exercise2/services/event-resolver.service';
import {Error404Component} from './exercise2/error-404/error-404.component';
import {EventDeleteComponent} from './exercise2/event-delete/event-delete.component';
import {EventDeleteActivator} from './exercise2/services/event-delete-activator.service';

export const appRoutes: Routes = [
  {path: 'events/create', component: CreateEventComponent},
  {path: 'events/delete/:id', component: EventDeleteComponent, canActivate: [EventDeleteActivator]},
  {path: 'events/:id', component: EventDetailComponent, resolve: {event: EventResolver}},
  {path: 'events', component: EventListComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
