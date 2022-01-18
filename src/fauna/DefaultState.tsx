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
  toggleModal: (variant: string) => {
    variant;
  },
  items: [ITEM_DEFAULT],
  units: [UNIT_DEFAULT],
  brands: [BRAND_DEFAULT],
  stores: [STORE_DEFAULT],
};
