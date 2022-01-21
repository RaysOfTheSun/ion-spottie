import { Component, Input, OnInit } from '@angular/core';
import { SpottieNavItem } from './models/spottie-nav-item.model';

@Component({
  selector: 'app-navigation-shell',
  templateUrl: './navigation-shell.component.html',
  styleUrls: ['./navigation-shell.component.scss']
})
export class NavigationShellComponent implements OnInit {
  @Input()
  items: SpottieNavItem[] = [
    {
      label: 'Home',
      route: 'home',
      icon: 'home-outline'
    },
    {
      label: 'Search',
      route: 'search',
      icon: 'search-outline'
    },
    {
      label: 'Library',
      route: 'library',
      icon: 'library-outline'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
