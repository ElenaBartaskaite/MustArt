import { Component, OnInit } from '@angular/core';
import { Resolutions } from '../../models/resolutions';

import { Image, SearchImage } from '../../models/image';
import { ImageService } from '../../services/image/image.service';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [ImageService, CartService]
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
  SubmitReview(){
    this.image.reviews.push({text: this.reviewText, verified: false, username: "No Username", reviewDate: new Date(2017,1, 1)});
    this.reviewText="";
  }
  SubmitQuestion(){
    this.image.questions.push({question: this.questionText, username: "No Username", askDate: new Date(2017,1, 1), verified: false, answers:[]});
    this.questionText="";
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

  AddToCart(id: string, product: string, details: string) {
    CartService.addItem(id, product, details);
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
