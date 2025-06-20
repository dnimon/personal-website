import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router) {
      this.setupRouterListen();
  }

  ngOnInit(): void {
  }

  setupRouterListen() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
      }
    });
  }

  getTitle(state: any, parent: any): any {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
