import { ColorService } from '../services/utility/utility.service';

export class Color {
    private r: number;
    private g: number;
    private b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    get hex() {
        return ColorService.rgbToHex(this.r, this.g, this.b);
    }
}
