import React, { useState, useEffect } from 'react';
import { ModalVariant, IndexQuery } from '../enums/Index';
import { Item, Unit, Brand, Store } from '../interfaces/Index';
import { Query } from '../fauna/Query';

import {
  QUERY_ALL_ITEMS,
  QUERY_ALL_UNITS,
  QUERY_ALL_BRANDS,
  QUERY_ALL_STORES,
} from '../fauna/QueryType';

import {
  ITEM_DEFAULT,
  UNIT_DEFAULT,
  BRAND_DEFAULT,
  STORE_DEFAULT,
  CONTEXT_DEFAULT,
} from '../fauna/DefaultState';

const Context = React.createContext(CONTEXT_DEFAULT);

const Provider = ({ children }) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalVariant, setModalVariant] = useState<string | null>(null);

  const toggleModal = (variant: ModalVariant.ADD_ITEM): void => {
    const bodyElemnt: HTMLBodyElement = document.querySelector('body');

    !modalActive
      ? (bodyElemnt.style.overflow = 'hidden')
      : (bodyElemnt.style.overflow = 'auto');

    setModalActive(!modalActive);
    setModalVariant(variant);
  };

  const [items, setItems] = useState<Array<Item>>([ITEM_DEFAULT]);
  const [units, setUnits] = useState<Array<Unit>>([UNIT_DEFAULT]);
  const [brands, setBrands] = useState<Array<Brand>>([BRAND_DEFAULT]);
  const [stores, setStores] = useState<Array<Store>>([STORE_DEFAULT]);

  const returnAllData = async (index: string): Promise<void> => {
    switch (index) {
      case IndexQuery.ALL_ITEMS:
        const itemdata = await Query.Post(QUERY_ALL_ITEMS);
        setItems(itemdata[index].data);
        break;
      case IndexQuery.ALL_UNITS:
        const unitData = await Query.Post(QUERY_ALL_UNITS);
        setUnits(unitData[index].data);
        break;
      case IndexQuery.ALL_BRANDS:
        const brandData = await Query.Post(QUERY_ALL_BRANDS);
        setBrands(brandData[index].data);
        break;
      case IndexQuery.ALL_STORES:
        const storeData = await Query.Post(QUERY_ALL_STORES);
        setStores(storeData[index].data);
        break;
      default:
        null;
    }
  };

  useEffect(() => {
    items.length === 1 &&
      Object.values(IndexQuery).forEach((index) => {
        returnAllData(index);
      });
  });

  return (
    <Context.Provider
      value={{
        modalActive,
        modalVariant,
        toggleModal,
        items,
        units,
        brands,
        stores,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

export { Provider };
