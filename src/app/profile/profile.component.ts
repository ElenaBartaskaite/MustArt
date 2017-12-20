import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NotificationService]
})
export class ProfileComponent implements OnInit {

  tagToAdd: string = "";
  emailAddress: string = "currentAddress@gmail.com";
  emailAddressInput: string = "";
  subscriptions: string[] = ["nature", "math", "trees"];

  currentPassword: string = "";
  newPassword: string = "";
  repeatPassword: string = "";

  constructor(
    private searchService: SearchService,
    private notifications: NotificationService
  ) { }

  ngOnInit() {
  }

  GoToTag(tag: string) {
    SearchService.tags = [tag];
    console.log(SearchService.tags);
    this.searchService.Navigate({
      tags: SearchService.tags,
      sort: SearchService.sortMode,
      display: SearchService.displayMode
    });
  }

  AddTag() {
    let trimmedTag = this.tagToAdd.trim();
    if (trimmedTag != "" && this.subscriptions.indexOf(trimmedTag) < 0) {
      this.subscriptions.push(this.tagToAdd);
      this.tagToAdd = "";
    }
    else {

    }
  }

  RemoveTag(event) {
    console.log(event);
    
    event.target.parentElement.hidden = true;
  }

  ChangeEmail(){
    console.log(document.getElementById('emailAddressInput'));
    this.emailAddress = (<any>document.getElementById('emailAddressInput')).value;
    (<any>document.getElementById('emailAddressInput')).value = "";
  }

  ChangePassword() {
    if (this.newPassword != this.repeatPassword) {
      this.notifications.showError("Error", "Passwords don't match. But colors do!");
    }
    else if (this.currentPassword.trim() != "" && this.newPassword.trim() != "" && this.repeatPassword.trim() != "") {
      this.notifications.showSuccess("Success", "Password was successfully changed.");
    }
    else {
      this.notifications.showError("Error", "Please fill in all 3 password fields.");
    }
  }

}
