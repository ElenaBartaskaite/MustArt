import { Color } from './color';

export class Image {
    id: string;
    name: string;
    description: string;
    matchingColors: Color[];
    dominantColor: Color;
    uploadDate: Date;
    tags: string[];
    prices: {[i: string]: number} = {
        "mug": 10,
        "shirt": 20,
        "print": 10,
    };
    questions: {
        question:string,
        answers: {
            answer: string[],
            relevance: number
        }
    }[];
    reviews: {
        text: string,
        verified: boolean
    }[];
}

export class SearchImage extends Image {
    relevance: number;
}
