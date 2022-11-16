import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from 'src/app/dtos/test.dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  test: Test;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if (this.route.snapshot.data.test) {
      this.test = this.route.snapshot.data.test;
    }
  }

}
