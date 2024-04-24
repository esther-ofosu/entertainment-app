import { LOCAL_KEYS } from './constants';
import { dataFile } from '../../data';
import { Data } from './interfaces';

export const saveBookmark = (dataItem: Data) => {
  const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
  let data;
  if (dataString) data = JSON.parse(dataString);
  else data = [];
  data.push(dataItem);
  localStorage.setItem(LOCAL_KEYS.BOOKMARK, JSON.stringify(data));
};

export const removeBookmark = (id: number) => {
  let data;
  const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
  if (!dataString) return;

  data = JSON.parse(dataString) as Data[];
  const match = data.find((bookmarkItem: Data) => bookmarkItem.id === id);
  if (match) {
    const dataIndex = data.indexOf(match);
    data.splice(dataIndex, 1);
    localStorage.setItem(LOCAL_KEYS.BOOKMARK, JSON.stringify(data));
  }
};

export const loadBookmark = () => {
  const dataString = localStorage.getItem(LOCAL_KEYS.BOOKMARK);
  if (dataString) return JSON.parse(dataString);
  else return [];
};
