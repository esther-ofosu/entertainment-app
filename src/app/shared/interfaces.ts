export interface Data {
  id: number;
  description: string;
  imgUrl: string;
  deskUrl?: string;
  tabUrl: string;
  mobUrl: string;
  year: number;
  category: string;
  icon: string;
  rated: string;
}

export interface BookmarkData {
  BookmarkEmpty: string;
  BookmarkFull: string;
}

export interface PlayButton{
    playIcon: string;
}

export interface Auth{
  
}

export interface User{
  email:string,
  password:string
}
