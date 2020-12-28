import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Auction } from '../Data/auction';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.scss']
})
export class AuctionDetailsComponent implements OnInit {

  auction:Auction;

  constructor(private activeRoute : ActivatedRoute,
    private dataService : DataService) { 
      activeRoute.params.subscribe(params=>
        this.loadAuction(params['uuid']));
  }

  loadAuction(uuid : string){
    this.dataService.auctionDetails(uuid)
      .subscribe(auction=>{this.auction=auction,console.log(auction)});
  }

  ngOnInit(): void {
  }

}
