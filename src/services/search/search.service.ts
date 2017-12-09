import { Injectable } from '@angular/core';
import { Color } from '../../models/color';

import { SortModes } from '../../models/sort-modes';
import { Resolutions } from '../../models/resolutions';

@Injectable()
export class SearchService {

    // Sorting
    sortMode: SortModes = SortModes.Newest;

    // Filtering
    keywords: string[];
    matchingColors: Color[];
    dominantColors: Color[];
    fromDate: Date;
    toDate: Date;
    resolution: Resolution;

    constructor() { }

    search() {

    }
}
