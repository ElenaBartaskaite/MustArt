import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification/notification.service';
import { Color } from '../../models/color';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  providers: [NotificationService]
})
export class UploadComponent implements OnInit {

  tagToAdd: string = "";
  tags: string[] = ["nature", "math", "trees"];
  matchingColor: any;
  colors: Color[] = [];
  constructor(private notifications: NotificationService) { }

  ngOnInit() {
  }

  AddTag() {
    let trimmedTag = this.tagToAdd.trim();
    if (trimmedTag != "" && this.tags.indexOf(trimmedTag) < 0) {
      this.tags.push(this.tagToAdd);
      this.tagToAdd = "";
    }
    else if (trimmedTag == "") {
      this.notifications.showError("Error", "Entered tag is not valid.");
    }
    else {
      this.notifications.showError("Error", "Tag " + trimmedTag + " is already added.");
    }
  }

  AddColor() {
    console.log(this.matchingColor);
    this.colors.push(new Color(null, null, null, this.matchingColor));
    console.log(this.colors);
  }

  RemoveColor(event) {
    console.log(event);
    
    event.target.hidden = true;
  }

  RemoveTag(event) {
    console.log(event.target.parentElement.childNodes[1].text);
    var index = this.tags.indexOf(event.target.parentElement.childNodes[1].text, 0);
    if (index > -1) {
        this.tags.splice(index, 1);
    }
  }

}
