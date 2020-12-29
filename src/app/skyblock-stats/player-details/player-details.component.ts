import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { PlayerAuctionsResponse } from '../Data/player-auctions-response';
import { PlayerBidsResponse } from '../Data/player-bids-response';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  throttle = 200;
  scrollDistance = 1;
  direction = "";
  auctions : PlayerAuctionsResponse[] = [];
  bids : PlayerBidsResponse[] = [];
  uuid :string;
  offset = 0;
  bidsOffset = 0;

  selectedTab = 0;
  


  constructor(private dataService : DataService,
    private activeRoute:ActivatedRoute,
    private router : Router) {
      activeRoute.params.subscribe(params=>{
        this.uuid = params['uuid'];
        this.auctions = [];
        this.bids = [];
        this.onScrollDown();
        this.onScrollDownBids();
      })
  }
  ngOnInit(): void {
  }


  onScrollDown() {
    this.dataService.playerAuctions(this.uuid,this.offset,20).subscribe(response=>{
      console.log(response);
      this.auctions.push(...response);
      console.log(this.auctions)
      this.offset += response.length;
    })
  }

  onScrollDownBids() {
    this.dataService.playerBids(this.uuid,this.bidsOffset,20).subscribe(response=>{
      this.bids.push(...response);
      this.bidsOffset += response.length;
    })
  }

  click(uuid:string) {
    this.router.navigate(["auction",uuid]);
  }

  onUp() {
    // nothing to do for now
  }

}
