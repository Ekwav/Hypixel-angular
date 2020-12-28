import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemGraphComponent } from './item-graph/item-graph.component';
import { AuctionDetailsComponent } from './auction-details/auction-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AuctionThumbnailComponent } from './auction-thumbnail/auction-thumbnail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [SearchBoxComponent, ItemGraphComponent, AuctionDetailsComponent, PlayerDetailsComponent, SuggestionComponent, AuctionThumbnailComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    ScrollingModule,
    MatTabsModule,
    InfiniteScrollModule
  ],
  exports: [SearchBoxComponent]
})
export class SkyblockStatsModule { }
