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
    var re = /([^a-zA-z0-9\s])+/; 
    SearchService.tags = this.rawKeywords.replace(re, ' ').split(' ');
    this.searchService.Navigate({tags: SearchService.tags, sort: SearchService.sortMode});
  }

}
