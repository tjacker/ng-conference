import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, NavBarComponent, EventsListComponent, EventThumbnailComponent],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
