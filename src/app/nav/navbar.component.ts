import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      li > a.active {
        color: #f97924;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `
  ]
})
export class NavBarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions;
    });
  }
}
