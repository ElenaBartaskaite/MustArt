import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  rawKeywords = '';

  constructor(public searchService: SearchService) {

  }

  ngOnInit() {

  }

  //#FIXME USE ME PLS 
  Search() {
    var re = /([^a-zA-z0-9\s])+/g;
    console.log(this.rawKeywords);
    SearchService.tags = this.rawKeywords.replace(re, ' ').split(' ');
    console.log(this.rawKeywords.replace(re, ' '));
    console.log(SearchService.tags);
    this.searchService.Navigate({
      tags: SearchService.tags,
      sort: SearchService.sortMode,
      display: SearchService.displayMode
    });
  }

}
