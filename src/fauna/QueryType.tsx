export const ALL_ITEMS = `
  query {
    all_items {
      data {
        _id
        _ts
        name
      }
    }
  }
`;

export const ITEM_DATA = {
  name: '',
};

export const ALL_PRICES = `
  query {
    all_prices {
      data {
        _id
        _ts
        amount
        bio
        brand
        price
        store
        unit
        item
      }
    }
  }
`;

export const PRICE_DATA = {
  amount: '',
  bio: false,
  brand: '',
  price: '',
  store: '',
  unit: '',
  itemId: '',
};

export const ALL_STORES = `
  query {
    all_stores {
      data {
        _id
        _ts
        name
        location
      }
    }
  }
`;

export const STORE_DATA = {
  name: '',
  location: '',
};

export const ALL_UNITS = `
  query {
    all_units {
      data {
        _id
        _ts
        name
      }
    }
  }
`;

export const UNIT_DATA = {
  name: '',
};

export const ALL_BRANDS = `
  query {
    all_brands {
      data {
        _id
        _ts
        name
      }
    }
  }
`;

export const BRAND_DATA = {
  name: '',
};

export const CONTEXT_STATE = {
  modalActive: false,
  modalVariant: null,
  toggleModal: (variant: string) => {
    variant;
  },
  items: [ITEM_DATA],
  units: [UNIT_DATA],
  brands: [BRAND_DATA],
  stores: [STORE_DATA],
};
