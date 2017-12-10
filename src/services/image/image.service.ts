import { Injectable } from '@angular/core';

import { Image, SearchImage } from '../../models/image';

import { Color } from '../../models/color';

@Injectable()
export class ImageService {
  images: SearchImage[] = [
    { "id": "1", "name": "name1", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 1), "tags": ["a", "b"], "relevance": 2},
    { "id": "2", "name": "name2", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 3), "tags": ["a", "b"], "relevance": 1},
    { "id": "3", "name": "name3", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 2), "tags": ["a", "b"], "relevance": 0},
    { "id": "4", "name": "name4", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 4), "tags": ["a", "b"], "relevance": 1},
    { "id": "5", "name": "name5", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 1), "tags": ["a", "b"], "relevance": 0},
    { "id": "5", "name": "name6", "description": "name1", "matchingColors": [new Color(0,0,0)], "dominantColor": new Color(0,0,0), "uploadDate": new Date(2017, 1, 2), "tags": ["a", "b"], "relevance": 3},
  ];
  getImages(): SearchImage[] {
    return this.images;
  }
  getImageById(id):SearchImage{
    return this.images.find(item => item.id === id);
  }
  constructor() { }

}
