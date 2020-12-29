import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Auction } from '../Data/auction';

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.scss']
})
export class AuctionDetailsComponent implements OnInit {

  auction:Auction;
  sellerName:string;

  constructor(private activeRoute : ActivatedRoute,
    private dataService : DataService,
    private router : Router) { 
      activeRoute.params.subscribe(params=>
        this.loadAuction(params['uuid']));
  }

  loadAuction(uuid : string){
    this.dataService.auctionDetails(uuid)
      .subscribe(auction=>{
        auction.bids = auction.bids.sort((a,b)=>new Date(b.timestamp).getTime()-new Date(a.timestamp).getTime())
        this.auction=auction;
        this.dataService.playerName(auction.auctioneerId).subscribe(name=>this.sellerName=name);
        console.log(auction)});
  }

  ngOnInit(): void {
  }

  navigateToItem(){
    this.router.navigate(["item",this.auction.tag]);
  }

  navigateToSeller(){
    this.router.navigate(["player",this.auction.auctioneerId]);
  }
}
