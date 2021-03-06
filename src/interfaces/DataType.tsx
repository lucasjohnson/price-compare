export interface Item {
  _id?: string;
  _ts?: number;
  id?: string;
  name: string;
  prices?: {
    data: Price[];
  };
}

export interface Brand {
  _id?: string;
  _ts?: number;
  name: string;
}

export interface Unit {
  _id?: string;
  _ts?: number;
  name: string;
}

export interface Store {
  _id?: string;
  _ts?: number;
  name: string;
  location: string;
}

export interface Price {
  _id?: string;
  _ts?: number;
  amount: string;
  bio: boolean;
  brand: string;
  id?: string;
  itemId?: string;
  name?: string;
  price: string;
  store: string;
  unit: string;
}

export interface SearchTerm {
  searchterm: string;
}

export interface Result {
  item: Item;
}
