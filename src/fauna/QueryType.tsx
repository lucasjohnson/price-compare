export const CREATE_ITEM = `
  mutation($name: String!){
    createItem(data: {name: $name}){
      _id
      _ts
      name
    }
  }
`;

export const CREATE_ITEM_PRICE = `
  mutation($amount: String!, $bio: Boolean!, $brand: String, $name: String!, $price: String!, $store: String!, $unit: String!){
    createItem(data: {
      name: $name,
      prices: {
        create: {amount: $amount, bio: $bio, brand: $brand, price: $price, store: $store, unit: $unit}
      }
    }){
      _id
      name
      prices {
        data {
          _id
          amount
          bio
          brand
          price
          store
          unit
        }
      }
    }
  }
`;

export const UPDATE_ITEM = `
  mutation($id: ID!, $name: String!){
    updateItem(id: $id, data: {name: $name}){
      name
    }
  }
`;

export const DELETE_ITEM = `
  mutation($id: ID!){
    deleteItem(id: $id){
      _id
    }
  }
`;

export const DELETE_PRICE = `
  mutation($id: ID!){
    deletePrice(id: $id){
      _id
    }
  }
`;

export const QUERY_ALL_ITEMS = `
  query {
    all_items {
      data {
        _id
        _ts
        name
        prices {
          data {
            _id
            _ts
            amount
            bio
            brand
            price
            store
            unit
          }
        }
      }
    }
  }
`;

export const QUERY_ALL_STORES = `
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

export const QUERY_ALL_UNITS = `
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

export const QUERY_ALL_BRANDS = `
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
