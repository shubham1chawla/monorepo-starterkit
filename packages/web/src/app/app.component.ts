import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyDataModel } from '@monorepo/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data$: Observable<MyDataModel> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.data$ = this.http.get<MyDataModel>('http://localhost:3000');
  }
}
