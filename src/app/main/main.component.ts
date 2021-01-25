import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  useragent = '';
  app_version = '';
  constructor() {}

  ngOnInit(): void {
    this.useragent = navigator.userAgent;
    this.app_version = navigator.appVersion;
  }
}
