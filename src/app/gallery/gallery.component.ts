import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

import { DisplayModes } from '../../models/display-modes';
import { SortModes } from '../../models/sort-modes';
import { Image, SearchImage } from '../../models/image';
import { Color } from '../../models/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [SearchService]
})
export class GalleryComponent implements OnInit {
  images: SearchImage[] = [
    { "id": "1", "name": "name1", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 1), "tags": ["a", "basd", "aasdf", "basd", "aasdf", "basd", "aasdf"], "relevance": 2},
    { "id": "2", "name": "name2", "description": "name2", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 3), "tags": ["a", "b"], "relevance": 1},
    { "id": "3", "name": "name3", "description": "name3", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 2), "tags": ["a", "b"], "relevance": 0},
    { "id": "4", "name": "name4", "description": "name4", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 4), "tags": ["a", "b"], "relevance": 1},
    { "id": "5", "name": "name5", "description": "name5", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 1), "tags": ["a", "b"], "relevance": 0},
    { "id": "5", "name": "name6", "description": "name6", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 2), "tags": ["a", "b"], "relevance": 3},
  ];

  constructor(private searchService: SearchService, private router: Router) {
  }

  ngOnInit() {
  }

  get ColumnCount(): number {
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
      return;
    }
    console.log("Sorting by " + sortMode);
    if (sortMode == SortModes.Newest.toString()) {
      this.searchService.sortMode = SortModes.Newest;
      this.images.sort((i1, i2) => {
        if (i1.uploadDate < i2.uploadDate) return -1;
        if (i1.uploadDate > i2.uploadDate) return 1;
        return 0;
      });
    }
    else if (sortMode == SortModes.Oldest.toString()) {
      this.searchService.sortMode = SortModes.Oldest;
      this.images.sort((i1, i2) => {
        if (i1.uploadDate > i2.uploadDate) return -1;
        if (i1.uploadDate < i2.uploadDate) return 1;
        return 0;
      });
    }
    else if (sortMode == SortModes.Relevant.toString()) {
      this.searchService.sortMode = SortModes.Relevant;
      this.images.sort((i1, i2) => {
        if (i1.relevance < i2.relevance) return -1;
        if (i1.relevance > i2.relevance) return 1;
        return 0;
      });
    }
    this.router.navigate(['/gallery'], { queryParams: { sort: sortMode.toString()}, queryParamsHandling: 'merge' });
  }

}
