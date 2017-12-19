import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  subscriptions: string[] = ["nature", "math", "trees", "deep", "math", "trees", "deep", "math", "trees", "deep", "math", "trees", "deep"];

  constructor() { }

  ngOnInit() {
  }

}
