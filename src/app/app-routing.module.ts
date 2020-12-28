import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionDetailsComponent } from './skyblock-stats/auction-details/auction-details.component';
import { ItemGraphComponent } from './skyblock-stats/item-graph/item-graph.component';
import { PlayerDetailsComponent } from './skyblock-stats/player-details/player-details.component';


const routes: Routes = [
    { path: "", component: ItemGraphComponent },
    { path: "item/:tag", component: ItemGraphComponent },
    { path: "player/:uuid", component: PlayerDetailsComponent },
    { path: "auction/:uuid", component: AuctionDetailsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
