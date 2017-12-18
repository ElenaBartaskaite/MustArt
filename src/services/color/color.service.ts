import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

  constructor() { }

  static componentToHex(c): string {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  static rgbToHex(r: number, g: number, b: number) {
    return '#'
      + this.componentToHex(r)
      + this.componentToHex(g)
      + this.componentToHex(b);
  }

  static hexToRgb(hex: string) {
    return {
      r: this.hexToR(hex),
      g: this.hexToG(hex),
      b: this.hexToB(hex)
    }
  }

  static hexToR(h) { return parseInt((this.cutHex(h)).substring(0, 2), 16) }
  static hexToG(h) { return parseInt((this.cutHex(h)).substring(2, 4), 16) }
  static hexToB(h) { return parseInt((this.cutHex(h)).substring(4, 6), 16) }
  static cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1, 7) : h }
}
