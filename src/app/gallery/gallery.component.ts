import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

import { DisplayModes } from '../../models/display-modes';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [SearchService]
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

  get ColumnCount() : number {
    if (this.searchService.displayMode == DisplayModes.Normal) {
      return 4;
    }
    else if (this.searchService.displayMode == DisplayModes.Large) {
      return 2;
    }
  }

  ChangeDisplayMode() {
    if (this.searchService.displayMode == DisplayModes.Normal) {
      this.searchService.displayMode = DisplayModes.Large;
    }
    else {
      this.searchService.displayMode = DisplayModes.Normal;
    }
  }

}
