export interface Item {
  name: string;
  _id?: string;
  _ts?: number;
}

export interface Brand {
  name: string;
  _id?: string;
  _ts?: number;
}

export interface Unit {
  name: string;
  _id?: string;
  _ts?: number;
}

export interface Store {
  name: string;
  location?: string;
  _id?: string;
  _ts?: number;
}

export interface Price {
  amount: string;
  bio: boolean;
  brand: string;
  price: string;
  store: string;
  unit: string;
  itemId: string;
  _id?: string;
  _ts?: number;
}
