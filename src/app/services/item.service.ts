import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3001/items';
  httpOptions = {
    headers: {'Content-Type' : 'application/json'}
  }
  items:Item[] = [
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
  ];

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url)

  }

  addItem(item:Item):Observable<Item[]>{
    //this.items.unshift(item);
    return this.http.post<Item[]>(this.url, item, this.httpOptions);
  }

}
