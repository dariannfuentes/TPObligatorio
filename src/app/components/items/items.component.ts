import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{
  items: Item[] = [];
  ngOnInit(): void {
    this.items=[
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quantity: 4,
        completed: false
      },
      {
        id: 1,
        title: 'Pan',
        price: 3.5,
        quantity: 8,
        completed: true
      },
      {
        id: 2,
        title: 'campera',
        price: 300,
        quantity: 1,
        completed: false
      }
    ]
  }
}
