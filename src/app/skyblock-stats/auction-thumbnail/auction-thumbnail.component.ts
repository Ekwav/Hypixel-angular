import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-thumbnail',
  templateUrl: './auction-thumbnail.component.html',
  styleUrls: ['./auction-thumbnail.component.scss']
})
export class AuctionThumbnailComponent implements OnInit {

  @Input()
  public auction: any;

  constructor() { }

  ngOnInit(): void {
  }

}
