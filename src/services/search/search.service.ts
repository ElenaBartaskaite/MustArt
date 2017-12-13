import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../../models/color';

import { SortModes } from '../../models/sort-modes';
import { List } from '../../models/list';
import { DisplayModes } from '../../models/display-modes';
import { SearchImage } from '../../models/image';

import { ImageService } from '../image/image.service';

@Injectable()
export class SearchService {

    // Sorting
    sortMode: SortModes = SortModes.Newest;

    // Filtering
    tags: string[] = [];
    matchingColors: Color[] = [];
    dominantColors: Color[] = [];
    fromDate: Date = new Date(2017, 1, 1);
    toDate: Date = new Date();
    resolutions: List<string> = new List<string>();

    // Display
    displayMode: DisplayModes = DisplayModes.Normal;

    searchImages: SearchImage[] = [];

    constructor(private imageService: ImageService, private router: Router) {
    }

    Search() {
        this.searchImages = this.imageService.getImages();
        this.router.navigate(['/gallery'], {
            queryParams: {
                sort: this.sortMode.toString(),
                tags: this.tags.join(',')
            },
            queryParamsHandling: "merge"
        });
    }
}
