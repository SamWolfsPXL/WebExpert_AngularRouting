import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {EventService} from './exercise2/services/event.service';
import {HttpClientModule} from '@angular/common/http';
import { EventListComponent } from './exercise2/event-list/event-list.component';
import { CreateEventComponent } from './exercise2/create-event/create-event.component';
import { EventDetailComponent } from './exercise2/event-detail/event-detail.component';
import { Error404Component } from './exercise2/error-404/error-404.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {EventResolver} from './exercise2/services/event-resolver.service';
import { EventDeleteComponent } from './exercise2/event-delete/event-delete.component';
import {EventDeleteActivator} from './exercise2/services/event-delete-activator.service';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    EventDetailComponent,
    Error404Component,
    EventDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventResolver,
    EventDeleteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
