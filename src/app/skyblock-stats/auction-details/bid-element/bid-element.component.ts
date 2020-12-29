import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Bid } from '../../Data/bid';

@Component({
  selector: 'app-bid-element',
  templateUrl: './bid-element.component.html',
  styleUrls: ['./bid-element.component.scss']
})
export class BidElementComponent implements OnInit {

  @Input()
  public bid: Bid;
  name: string;

  constructor(private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.dataService.playerName(this.bid.bidder)
      .subscribe(name => this.name = name);
  }

  showPlayer(uuid : string) {
    this.router.navigate(["player",uuid]);
  }

  playerBodyUrl(uuid:string) {
    if(uuid)
      return "https://mc-heads.net/body/"+uuid;
    return null;
  }
}
