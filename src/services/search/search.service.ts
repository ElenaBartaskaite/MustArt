import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from '../../models/color';

import { SortModes } from '../../models/sort-modes';
import { List } from '../../models/list';
import { DisplayModes } from '../../models/display-modes';
import { SearchImage } from '../../models/image';

import { RoutingService } from '../routing/routing.service';
import { ImageService } from '../image/image.service';
import { getLocaleDateTimeFormat } from '@angular/common/src/i18n/locale_data_api';
import { ColorService } from '../color/color.service';

@Injectable()
export class SearchService {

    // Sorting
    static sortMode: string = 'Newest';

    // Filtering
    static tags: string[] = [''];
    static matchingColor: Color = null;
    static dominantColor: Color = null;
    static fromDate: Date = new Date(2017, 1, 1);
    static toDate: Date = new Date();
    static resolutions: List<string> = new List<string>();

    // Display
    static displayMode: DisplayModes = DisplayModes.Normal;

    static searchImages: SearchImage[] = [];

    get Tags() { return SearchService.tags; }

    constructor(
        private imageService: ImageService,
        private router: Router,
        private routingService: RoutingService
    ) {
        SearchService.searchImages = this.imageService.getImages();
        SearchService.tags = [''];
        SearchService.sortMode = "Newest";
        this.Sort();
    }

    defaultQueryParams = {
        sort: 'Newest',
        tags: [''],
        display: 'Normal'
    };

    Search() {
        console.log("Searching...");
        console.log(SearchService.tags);
        console.log(SearchService.fromDate + ' ' + SearchService.toDate);
        SearchService.searchImages = this.imageService.getImages();
        for (let searchImage of SearchService.searchImages) {
            searchImage.relevance = 0;
        }
        SearchService.searchImages = SearchService.searchImages.filter(image => {
            for (let tag of SearchService.tags) {
                if (image.name.search(tag) > -1 || image.description.search(tag) > -1 || image.tags.join(' ').search(tag) > -1) {
                    image.relevance++;
                }
            }
            let colorMatches = 1, colorDominance = 1;
            if (SearchService.matchingColor != null) {
                colorMatches = SearchService.matchingColor.IsSimilarTo(image.matchingColors);
            }
            if (SearchService.dominantColor != null) {
                colorDominance = SearchService.dominantColor.IsSimilarTo([image.dominantColor]);
            }
            console.log('dom:' + colorDominance + ' match: ' + colorMatches);
            return (
                image.relevance > 0 &&
                image.uploadDate >= SearchService.fromDate &&
                image.uploadDate <= SearchService.toDate &&
                colorMatches > 0 &&
                colorDominance > 0
            );
        });
    }

    Sort() {
        console.log('Sorting...');
        console.log(SearchService.sortMode);
        if (SearchService.sortMode == SortModes.Newest.toString()) {
            SearchService.sortMode = SortModes.Newest;
            SearchService.searchImages.sort((i1, i2) => {
                if (i1.uploadDate < i2.uploadDate) return -1;
                if (i1.uploadDate > i2.uploadDate) return 1;
                return 0;
            });
        }
        else if (SearchService.sortMode == SortModes.Oldest.toString()) {
            SearchService.sortMode = SortModes.Oldest;
            SearchService.searchImages.sort((i1, i2) => {
                if (i1.uploadDate > i2.uploadDate) return -1;
                if (i1.uploadDate < i2.uploadDate) return 1;
                return 0;
            });
        }
        else if (SearchService.sortMode == SortModes.Relevant.toString()) {
            SearchService.sortMode = SortModes.Relevant;
            SearchService.searchImages.sort((i1, i2) => {
                if (i1.relevance < i2.relevance) return -1;
                if (i1.relevance > i2.relevance) return 1;
                return 0;
            });
        }
    }

    Navigate(queryParams: any = this.defaultQueryParams): Promise<boolean> {
        console.log(Date.now() + ' ###### Starting navigation ######');
        SearchService.tags = queryParams.tags;
        this.Search();
        SearchService.sortMode = queryParams.sort;
        this.Sort();
        console.log(SearchService.searchImages);
        return this.router.navigate(['/gallery'], {
            queryParams: {
                sort: queryParams.sort,
                tags: queryParams.tags.join(','),
                display: queryParams.display
            },
            queryParamsHandling: "merge"
        });
    }
}
