import { Component, OnInit } from '@angular/core';
import { Resolutions } from '../../models/resolutions';

import { Image, SearchImage } from '../../models/image';
import { ImageService } from '../../services/image/image.service';

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
  reviewText: string;
  questionText: string;
  imgPreview = {
    "active": true,
    "src": ""
  };
  mugPreview = {
    "active": false,
    "src": "assets/images/mug.png"
  };
  tshirtPreview = {
    "active": false,
    "src": "assets/images/tshirt.png"
  }
  activeSrc = "";
  get resolutions() { return Resolutions.All; }
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
      let receivedImage = this.imageService.getImageById(params.id);
      this.imgPreview.src = "assets/images/" + receivedImage.id + ".png";
      this.activeSrc = this.imgPreview.src;
      return this.image = receivedImage;
    });
  }

  ChangePreview(event) {
    console.log(event);
    this.activeSrc = event.target.children[0].src;
    document.getElementById('imgThumbnail').classList.remove("img-thumbnail-active");
    document.getElementById('tshirtThumbnail').classList.remove("img-thumbnail-active");
    document.getElementById('mugThumbnail').classList.remove("img-thumbnail-active");
    event.target.classList.add("img-thumbnail-active");
  }
  
}
