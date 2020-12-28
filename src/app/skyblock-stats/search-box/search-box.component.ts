import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { Suggestion } from '../suggestion';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output()
  public value: string;

  suggestions: Suggestion[] = [];
  hasFocus : boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  lostFocus()
  {
    setTimeout(()=>{this.hasFocus = false},200);
  }

  clear() {
    this.value = "";
    this.suggestions = [];
  }

  update(value) {
    this.dataService.search(value).subscribe(result => {
      console.log(result)
      this.suggestions = result;
    })
  }

}
