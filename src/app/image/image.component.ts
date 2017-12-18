import { Component, OnInit } from '@angular/core';

import { Image, SearchImage } from '../../models/image';
import{ImageService}from '../../services/image/image.service';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [ImageService]
})
export class ImageComponent implements OnInit {
  image: SearchImage;
  id: string;
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetImage();
    console.log(this.image.reviews[0].reviewDate);
  }
  GetImage(): void {
    this.route.queryParams
    .filter(params => params.id)
    .subscribe(params => {
      console.log(params); 

      return this.image = this.imageService.getImageById(params.id);
    });
  }
  
}
