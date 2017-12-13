import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { SearchService } from '../../services/search/search.service';
import { ImageService } from '../../services/image/image.service';

import { DisplayModes } from '../../models/display-modes';
import { SortModes } from '../../models/sort-modes';
import { Image, SearchImage } from '../../models/image';
import { Color } from '../../models/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [SearchService, ImageService]
})
export class GalleryComponent implements OnInit {
  images: SearchImage[];
  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute, private router: Router, private imageService: ImageService) {
  }

  ngOnInit() {
    this.getImages();
    this.searchService.Search();
    console.log(this.activatedRoute.queryParams);
  }

  getImages(): void {
    this.images = this.imageService.getImages();
  }

  get ColumnCount(): number {
    if (this.searchService.displayMode == DisplayModes.Normal) {
      return 4;
    }
    else if (this.searchService.displayMode == DisplayModes.Large) {
      return 2;
    }
  }

  GoToImage(id: string) {
    this.router.navigate(['/image'], { queryParams: { id: id}, queryParamsHandling: 'merge' });
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
  }

}
