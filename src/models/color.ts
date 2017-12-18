import { ColorService } from '../services/color/color.service';

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
            this.hex = this.Hex;
        }
    }

    get Hex() {
        return ColorService.rgbToHex(this.r, this.g, this.b);
    }
}
