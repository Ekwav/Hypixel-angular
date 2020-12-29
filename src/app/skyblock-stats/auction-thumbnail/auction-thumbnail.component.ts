import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auction } from '../Data/auction';
import { PlayerAuctionsResponse } from '../Data/player-auctions-response';

@Component({
  selector: 'app-auction-thumbnail',
  templateUrl: './auction-thumbnail.component.html',
  styleUrls: ['./auction-thumbnail.component.scss']
})
export class AuctionThumbnailComponent implements OnInit {

  @Input()
  public auction: PlayerAuctionsResponse;
  @Input()
  public highestOwn : number = 0;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  click(uuid:string) {
    this.router.navigate(["auction",uuid]);
  }

}
