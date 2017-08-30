import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private fb: FirebaseService ) { }

  ngOnInit() {
    this.fb.getItems()
    .subscribe((items)=>{
      console.log(items)
      this.items = items;
    });
  }

}
