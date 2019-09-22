import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  
  public topics = ['1', '2', '3'];
  public topicss = ['Table', 'Chair', 'Tv'];

  constructor() { }

  ngOnInit() {
  }

}
