import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public appPages = [
    { title: 'Dashboard', url: '/app/dashboard', icon: 'bar-chart' },
    { title: 'Equipment', url: '/app/equipment', icon: 'desktop' },
    { title: 'Tests', url: '/app/test', icon: 'rocket' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
