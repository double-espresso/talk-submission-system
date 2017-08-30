import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Item } from '../models/item';

@Injectable()
export class FirebaseService {
  items: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) { }

  getItems() {
    this.items = this.database.list('/items') as FirebaseListObservable<Item[]>;
    return this.items;
  }
}
