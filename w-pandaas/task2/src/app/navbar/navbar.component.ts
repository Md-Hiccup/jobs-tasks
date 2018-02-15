import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarList } from '../navbarlist';
import { NAVBARLIST, SIDENAV } from '../mock-navbarlist';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navlinks : any = NAVBARLIST;
  sidenav : any = SIDENAV;
  constructor() { }

  ngOnInit() {
  }

}
