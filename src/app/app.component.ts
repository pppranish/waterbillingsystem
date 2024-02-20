import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shouldShowHeader: boolean = true;
  shouldShowNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderAndNavbarVisibility(event.url);
      }
    });
  }

  private updateHeaderAndNavbarVisibility(url: string): void {
    const excludedRoutes = ['login', 'signup'];

  
    if (excludedRoutes.some(route => url.endsWith(route))) {
      this.shouldShowHeader = false;
      this.shouldShowNavbar = false;
    } else {
      this.shouldShowHeader = true;
      this.shouldShowNavbar = true;
    }
  }
}
