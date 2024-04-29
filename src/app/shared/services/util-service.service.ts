import { Injectable } from '@angular/core';
import { LOCAL_KEYS } from '../constants';
import { Data } from '../interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilServiceService {
  saveBookmark = (dataItem: Data) => {
    const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
    let data: Data[];
    if (dataString) data = JSON.parse(dataString);
    else data = [];

    if (data.length) {
      const item = data.find(
        (bookmarkItem: Data) => bookmarkItem.id === dataItem.id
      );
      if (!item) data.push(dataItem);
    } else {
      data.push(dataItem);
    }

    localStorage.setItem(LOCAL_KEYS.BOOKMARK, JSON.stringify(data));
  };

  removeBookmark = (id: number) => {
    let data: Data[];
    const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
    if (!dataString) return;

    data = JSON.parse(dataString);
    const match = data.find((bookmarkItem: Data) => bookmarkItem.id == id);
    if (match) {
      data = data.filter((bookmarkItem) => bookmarkItem.id != id);
      console.log(data);

      localStorage.setItem(LOCAL_KEYS.BOOKMARK, JSON.stringify(data));
    }
  };

  loadBookmark = () => {
    const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
    if (dataString) return JSON.parse(dataString);
    else return [];
  };
}
