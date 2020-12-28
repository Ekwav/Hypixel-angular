import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Suggestion } from '../suggestion';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  @Input()
  public suggestion: Suggestion;

  constructor(private router: Router,
    private dataService : DataService) { }

  ngOnInit(): void {
  }


  navigate() {
    this.dataService.trackSuggestion(this.suggestion);
    this.router.navigate([this.suggestion.type, this.suggestion.id])
  }
}
