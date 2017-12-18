import { Color } from './color';

export class Image {
    id: string;
    name: string;
    description: string;
    matchingColors: Color[];
    dominantColor: Color;
    uploadDate: Date;
    tags: string[];
    prices: {
        mug: number;
        shirt: number;
        print: number;
    };
    questions: {
        question:string,
        username: string,
        askDate: Date,
        verified: boolean,
        answers: {
            answer: string,
            relevance: number,
            username: string,
            answerDate: Date,
            best: boolean,
        }[]
    }[];
    reviews: {
        text: string,
        verified: boolean,
        username: string,
        reviewDate: Date,
    }[];
}

export class SearchImage extends Image {
    relevance: number;
}
