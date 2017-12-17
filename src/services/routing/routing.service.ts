import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    
  }

  getParam(paramName: string): any {
    let param;
    this.activatedRoute.queryParams
    .filter(params => params[paramName])
    .subscribe(params => {
      return param = params[paramName];
    });
    return param;
  }
}
