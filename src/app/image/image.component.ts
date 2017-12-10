import { Component, OnInit } from '@angular/core';

import { Image, SearchImage } from '../../models/image';
import{ImageService}from '../../services/image/image.service';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  providers: [ImageService]
})
export class ImageComponent implements OnInit {
  image: SearchImage;
  id: string;
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .filter(params => params.image)
    .subscribe(params => {

      this.id = params.image;
    });
    this.getImages();
  }
  getImages(): void {
    this.image = this.imageService.getImageById(this.id);
  }
}
