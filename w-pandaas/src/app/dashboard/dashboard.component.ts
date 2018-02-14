import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashList } from '../dashlist';
import { DASHLISTS, DASH } from '../mock-dashlist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  dashes: any = DASHLISTS;
  dash11: any = DASH;
  constructor(private http : HttpClient) { }

  ngOnInit() {
    // this.http.get('/dashboard').subscribe(data => {
    //   this.dashboards = data;
    // })
  }

}
