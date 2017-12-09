import { Injectable } from '@angular/core';
import { Color } from '../../models/color';

import { SortModes } from '../../models/sort-modes';
import { List } from '../../models/list';
import { DisplayModes } from '../../models/display-modes';

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
    resolution: List<string>;

    // Display
    displayMode: DisplayModes = DisplayModes.Normal;

    constructor() {
        this.sortMode = SortModes.Newest;
        this.displayMode = DisplayModes.Normal;
    }

    search() {

    }
}
