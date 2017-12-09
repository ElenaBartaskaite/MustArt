import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    { "src": "http://via.placeholder.com/256x128", "alt": "First Image" },
    { "src": "http://via.placeholder.com/256x256", "alt": "Second image" },
    { "src": "http://via.placeholder.com/128x256", "alt": "Third image" },
    { "src": "http://via.placeholder.com/256x256", "alt": "Fourth image" }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
