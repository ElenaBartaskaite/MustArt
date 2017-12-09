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
}
