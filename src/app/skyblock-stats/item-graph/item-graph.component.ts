import { Component, OnInit } from '@angular/core';
import { CoflnetClientService } from 'src/app/coflnet-client.service';
import { DataService } from '../data.service';
import {curveBundle, curveCardinal, line} from 'd3-shape';
import { ItemPricesResponse } from '../Data/item-prices-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-graph',
  templateUrl: './item-graph.component.html',
  styleUrls: ['./item-graph.component.scss']
})
export class ItemGraphComponent implements OnInit {

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Price';
  timeline: boolean = true;
  curve : any;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  itemTag: string;

  constructor(private client: CoflnetClientService,
    private data: DataService,
    private route: ActivatedRoute) {

      this.curve = curveCardinal;
      route.params.subscribe(params=>{
        this.itemTag = params["tag"];
        var yesterday = new Date((new Date()).getTime() - 1000 * 60 * 60 * 24);
        data.getItemData(this.itemTag, yesterday, new Date()).subscribe(r => {
          this.multi = this.transformForGraph(r);
        });
      })



  }


  private transformForGraph(r: ItemPricesResponse[]): any[] {
    return [{
      "name": this.itemTag,
      "series": r.map(el => {
        return {
          name: new Date(el.end),
          value: el.price
        };
      })
    }];
  }

  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
