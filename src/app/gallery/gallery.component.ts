import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[SearchService]
})
export class GalleryComponent implements OnInit {
  images = [
    { "src": "http://via.placeholder.com/256x256", "alt": "First Image" },
    { "src": "http://via.placeholder.com/256x256", "alt": "Second image" },
    { "src": "http://via.placeholder.com/256x256", "alt": "Third image" },
    { "src": "http://via.placeholder.com/256x256", "alt": "Fourth image" }
  ];
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    
  }

}
