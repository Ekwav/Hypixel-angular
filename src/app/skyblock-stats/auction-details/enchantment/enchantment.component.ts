import { Component, Input, OnInit } from '@angular/core';
import { Enchantment } from '../../Data/enchantment';
import { Enchantments } from '../../enchantments.enum';

@Component({
  selector: 'app-enchantment',
  templateUrl: './enchantment.component.html',
  styleUrls: ['./enchantment.component.scss']
})
export class EnchantmentComponent implements OnInit {

  @Input()
  public enchantment:Enchantment;

  constructor() { }

  ngOnInit(): void {
    console.log(this.enchantment);
  }

}
