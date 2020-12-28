import { Component } from '@angular/core';
import { CoflnetClientService } from './coflnet-client.service';
import { DataService } from './skyblock-stats/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hypixel-angular';

  constructor(){
    
  }


}
