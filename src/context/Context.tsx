import React, { useState, useEffect } from 'react';
import { ModalVariant, IndexQuery } from '../enums/Index';
import { Item, Unit, Brand, Store } from '../interfaces/Index';
import { Query } from '../fauna/Query';
import {
  ALL_ITEMS,
  ALL_UNITS,
  ALL_BRANDS,
  ALL_STORES,
  ITEM_DATA,
  UNIT_DATA,
  BRAND_DATA,
  STORE_DATA,
  CONTEXT_STATE,
} from '../fauna/QueryType';

const Context = React.createContext(CONTEXT_STATE);

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

  const [items, setItems] = useState<Array<Item>>([ITEM_DATA]);
  const [units, setUnits] = useState<Array<Unit>>([UNIT_DATA]);
  const [brands, setBrands] = useState<Array<Brand>>([BRAND_DATA]);
  const [stores, setStores] = useState<Array<Store>>([STORE_DATA]);

  const returnData = async (index: string): Promise<void> => {
    switch (index) {
      case IndexQuery.ALL_ITEMS:
        const itemdata = await Query.getData(ALL_ITEMS);
        setItems(itemdata.all_items.data);
        console.log(itemdata.all_items.data);
        break;
      case IndexQuery.ALL_UNITS:
        const unitData = await Query.getData(ALL_UNITS);
        setUnits(unitData.all_units.data);
        break;
      case IndexQuery.ALL_BRANDS:
        const brandData = await Query.getData(ALL_BRANDS);
        setBrands(brandData.all_brands.data);
        break;
      case IndexQuery.ALL_STORES:
        const storeData = await Query.getData(ALL_STORES);
        setStores(storeData.all_stores.data);
        break;
      default:
        null;
    }
  };

  useEffect(() => {
    items[0].name.length === 0 &&
      Object.values(IndexQuery).forEach((index) => {
        returnData(index);
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
