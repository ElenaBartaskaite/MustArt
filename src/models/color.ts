import { ColorService } from '../services/color/color.service';
import { forEach } from '@angular/router/src/utils/collection';

export class Color {
    public r: number;
    public g: number;
    public b: number;

    public hex: string;

    constructor(r: number = null, g: number = null, b: number = null, hex: string = null) {
        if (r == null || g == null || b == null) {
            if (hex == null) {
                this.r = 0;
                this.g = 0;
                this.b = 0;
                this.hex = "#000000";
            }
            else {
                this.hex = hex;
                this.r = ColorService.hexToR(hex);
                this.g = ColorService.hexToG(hex);
                this.b = ColorService.hexToB(hex);
            }
        }
        else {
            this.r = r;
            this.g = g;
            this.b = b;
            this.hex = ColorService.rgbToHex(this.r, this.g, this.b);
        }
    }

    static similarityTreshold = 90;

    public IsSimilarTo?(colors: Color[]): number {
        let similarity = 0;
        for (let color of colors) {
            if (
                Math.abs(this.r - color.r) <= Color.similarityTreshold &&
                Math.abs(this.g - color.g) <= Color.similarityTreshold &&
                Math.abs(this.b - color.b) <= Color.similarityTreshold
            ) {
                similarity++;
            }
        }
        return similarity;
    }
}
