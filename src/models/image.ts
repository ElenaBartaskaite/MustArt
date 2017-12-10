import { Color } from './color';

export class Image {
    id: string;
    name: string;
    description: string;
    matchingColors: Color[];
    dominantColor: Color;
    uploadDate: Date;
    tags: string[];
}

export class SearchImage extends Image {
    relevance: number;
}
