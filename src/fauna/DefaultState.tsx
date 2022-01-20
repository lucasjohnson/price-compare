import { Item, Price } from '../interfaces/Index';

export const ITEM_DEFAULT = {
  name: '',
};

export const PRICE_DEFAULT = {
  amount: '',
  bio: false,
  brand: '',
  price: '',
  store: '',
  unit: '',
};

export const STORE_DEFAULT = {
  name: '',
  location: '',
};

export const UNIT_DEFAULT = {
  name: '',
};

export const BRAND_DEFAULT = {
  name: '',
};

export const CONTEXT_DEFAULT = {
  modalActive: false,
  modalVariant: null,
  itemData: ITEM_DEFAULT,
  priceData: PRICE_DEFAULT,
  items: [ITEM_DEFAULT],
  units: [UNIT_DEFAULT],
  brands: [BRAND_DEFAULT],
  stores: [STORE_DEFAULT],
  selectedItem: ITEM_DEFAULT,
  toggleModal: (variant: string) => {
    variant;
  },
  returnIndexData: (index: string): void => {
    index;
  },
  handleSetItemData: (data: Item): void => {
    data;
  },
  handleSetPriceData: (data: Price): void => {
    data;
  },
};

export const SEARCH_DEFAULT = {
  searchterm: '',
};
