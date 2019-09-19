import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"}
  ]

  public counts = this.departments.length;


  constructor() { }

  ngOnInit() {
  }

  onSelect(counts){
    if(this.departments.length == 1){
      this.counts = 1;
    }
  }

}
