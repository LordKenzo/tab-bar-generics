interface ItemBar {
  title: string;
  // content: string;
}

export interface Nations extends ItemBar {
  id: number;
  name: string;
  population: number;
}

export interface Favourites extends ItemBar {
  id: number;
  url: string;
  title: string;
}

export interface Animals extends ItemBar {
  id: number;
  name: string;
}
