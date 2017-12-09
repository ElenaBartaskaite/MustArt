import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

import { DisplayModes } from '../../models/display-modes';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [SearchService, NgbDropdownModule]
})
export class GalleryComponent implements OnInit {
  images = [
    { "src": "http://via.placeholder.com/256x256/f0f", "alt": "First Image" },
    { "src": "http://via.placeholder.com/256x256/f00", "alt": "Second image" },
    { "src": "http://via.placeholder.com/256x256/0ff", "alt": "Third image" },
    { "src": "http://via.placeholder.com/256x256/ff0", "alt": "Fourth image" }
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

  Sort(sortMode: string) {
    console.log("Starting sort");
    if (sortMode == this.searchService.sortMode.toString()) {

    }
    else if (sortMode != this.searchService.sortMode.toString()) {
      console.log("Sorting by " + sortMode);
      this.images.sort((i1, i2) => {
        if(i1.alt < i2.alt) return -1;
        if(i1.alt > i2.alt) return 1;
        return 0;
    });
    }
  }

}
