import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  tagToAdd: string = "";
  emailAddress: string = "currentAddress@gmail.com";
  emailAddressInput: string = "";
  subscriptions: string[] = ["nature", "math", "trees"];

  constructor(
    private searchService: SearchService
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
    this.emailAddress = document.getElementById('emailAddressInput').value;
    document.getElementById('emailAddressInput').value = "";
  }

}
