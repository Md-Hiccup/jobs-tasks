import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trixeditor',
  templateUrl: './trixeditor.component.html',
  styleUrls: ['./trixeditor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TrixEditorComponent implements OnInit {
  trixes :any = {};
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.http.get('/trix').subscribe( data => {
      this.trixes = data;
    })
  }

}
