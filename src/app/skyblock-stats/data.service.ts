import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'

import { CoflnetClientService } from '../coflnet-client.service';
import { Enchantments } from './enchantments.enum';
import { Reforges } from './reforges.enum';
import { ItemSearchQuery } from './Data/item-search-query'
import { ItemPricesResponse } from './Data/item-prices-response';
import { Suggestion } from './suggestion';
import { PlayerBidsResponse } from './Data/player-bids-response';
import { PlayerAuctionsResponse } from './Data/player-auctions-response';
import { Auction } from './Data/auction';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private client: CoflnetClientService) { }

  public getItemData(itemName: string, start: Date, end: Date, enchants: Enchantments[] = [], reforge: Reforges = 0)
      : Observable<ItemPricesResponse[]> {
    var query: ItemSearchQuery = {
      name: itemName,
      start: Math.floor(start.getTime() / 1000),
      end: Math.floor(end.getTime() / 1000),
    //  enchantments: enchants,
    //  reforge: reforge
    };
    return this.client.send("itemPrices", query)
      .pipe(map(command => command.deserialized as ItemPricesResponse[]));
  }

  public search(value:string) : Observable<Suggestion[]> {
    return this.client.send("fullSearch",value)
      .pipe(map(command => command.deserialized as Suggestion[]));
  }

  public playerBids(uuid:string,offset:number,amount:number = 10) : Observable<PlayerBidsResponse[]> {
    var query = {
      uuid:uuid,
      offset:offset,
      amount:amount
    }
    return this.client.send("playerBids",query)
      .pipe(map(command => command.deserialized as PlayerBidsResponse[]));
  }

  public playerAuctions(uuid:string,offset:number,amount:number = 10) : Observable<PlayerAuctionsResponse[]> {
    var query = {
      uuid:uuid,
      offset:offset,
      amount:amount
    }
    return this.client.send("playerAuctions",query)
      .pipe(map(command => command.deserialized as PlayerAuctionsResponse[]));
  }


  public auctionDetails(uuid:string) : Observable<Auction> {
    return this.client.send("auctionDetails",uuid)
      .pipe(map(command => command.deserialized as Auction));
  }

  public trackSuggestion(suggestion:Suggestion) {
    return this.client.send("trackSearch",{id:suggestion.id,type:suggestion.type}).subscribe();
  }
}
