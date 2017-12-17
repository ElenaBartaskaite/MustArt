import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { SearchService } from '../../services/search/search.service';
import { ImageService } from '../../services/image/image.service';
import { RoutingService } from '../../services/routing/routing.service';

import { DisplayModes } from '../../models/display-modes';
import { SortModes } from '../../models/sort-modes';
import { Image, SearchImage } from '../../models/image';
import { Color } from '../../models/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [SearchService, ImageService, RoutingService]
})
export class GalleryComponent implements OnInit {
  get images() {return SearchService.searchImages};
  get ss() {return SearchService;}
  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private routingService: RoutingService
  ) {
    this.searchService.Navigate();
  }

  ngOnInit() {

  }

  get ColumnCount(): number {
    if (SearchService.displayMode == DisplayModes.Normal) {
      return 4;
    }
    else if (SearchService.displayMode == DisplayModes.Large) {
      return 2;
    }
  }

  GoToImage(id: string) {
    this.router.navigate(['/image'], { queryParams: { id: id}, queryParamsHandling: 'merge' });
  }

  ChangeDisplayMode() {
    if (SearchService.displayMode == DisplayModes.Normal) {
      SearchService.displayMode = DisplayModes.Large;
    }
    else {
      SearchService.displayMode = DisplayModes.Normal;
    }
  }

  get Images() { return SearchService.searchImages || []; }

  Sort(sortMode: string) {
    if (sortMode == SearchService.sortMode.toString()) {
      return;
    }
    console.log("Sorting by " + sortMode);
    this.ss.sortMode = sortMode;
    //this.searchService.Sort();
    this.searchService.Navigate({
      sort: this.ss.sortMode,
      tags: this.ss.tags
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
  }

}
