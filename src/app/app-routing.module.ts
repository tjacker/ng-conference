import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './events/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventCreateComponent } from './events/event-create/event-create.component';

const routes: Routes = [
  { path: 'events/new', component: EventCreateComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
