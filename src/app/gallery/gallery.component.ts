import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { SearchService } from '../../services/search/search.service';
import { ImageService } from '../../services/image/image.service';
import { RoutingService } from '../../services/routing/routing.service';
import { ColorService } from '../../services/color/color.service';

import { Resolutions } from '../../models/resolutions';
import { DisplayModes } from '../../models/display-modes';
import { SortModes } from '../../models/sort-modes';
import { Image, SearchImage } from '../../models/image';
import { Color } from '../../models/color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [SearchService, ImageService, RoutingService, ColorService]
})
export class GalleryComponent implements OnInit {
  get images() { return SearchService.searchImages };
  get ss() { return SearchService; }
  get resolutions() { return Resolutions.All; }

  fromDate: Date = new Date(2017, 1, 1);
  toDate: Date = new Date();

  constructor(
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
    private routingService: RoutingService,
    private colorService: ColorService
  ) {
  }

  ngOnInit() {
    console.log(this.resolutions);
  }

  get ColumnCount(): number {
    if (SearchService.displayMode == DisplayModes.Normal) {
      return 4;
    }
    else if (SearchService.displayMode == DisplayModes.Large) {
      return 2;
    }
  }

  GoToTag(tag: string) {
    SearchService.tags = [tag];
    console.log(SearchService.tags);
    this.searchService.Navigate({
      tags: SearchService.tags,
      sort: SearchService.sortMode,
      display: SearchService.displayMode
    });
  }

  GoToImage(id: string) {
    this.router.navigate(['/image'], { queryParams: { id: id }, queryParamsHandling: 'merge' });
  }

  ChangeDisplayMode() {
    if (SearchService.displayMode == DisplayModes.Normal) {
      SearchService.displayMode = DisplayModes.Large;
    }
    else {
      SearchService.displayMode = DisplayModes.Normal;
    }
  }

  ChangeFromDate(event) {
    console.log(event);
    console.log(event.Date);
    this.ss.fromDate = event;
    this.searchService.Navigate({
      sort: this.ss.sortMode,
      tags: this.ss.tags,
      display: this.ss.displayMode
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
  }

  ChangeToDate(event) {
    console.log(event);
    console.log(event.Date);
    this.ss.toDate = event;
    this.searchService.Navigate({
      sort: this.ss.sortMode,
      tags: this.ss.tags,
      display: this.ss.displayMode
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
  }

  ChangeDominantColor(event) {
    console.log(event);
    if (event != null)
      this.ss.dominantColor = new Color(ColorService.hexToR(event), ColorService.hexToG(event), ColorService.hexToB(event));
    else
      this.ss.dominantColor = null;
    this.searchService.Navigate({
      sort: this.ss.sortMode,
      tags: this.ss.tags,
      display: this.ss.displayMode
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
  }

  ChangeMatchingColor(event) {
    if (event != null)
      this.ss.matchingColor = new Color(ColorService.hexToR(event), ColorService.hexToG(event), ColorService.hexToB(event));
    else
      this.ss.matchingColor = null;
    this.searchService.Navigate({
      sort: this.ss.sortMode,
      tags: this.ss.tags,
      display: this.ss.displayMode
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
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
      tags: this.ss.tags,
      display: this.ss.displayMode
    }).then(value => {
      console.log("Navigated by: " + this.routingService.getParam('sort') + ' ' + this.routingService.getParam('tags'));
    });
  }

}
