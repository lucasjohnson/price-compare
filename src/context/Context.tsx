import React, { useState, useEffect } from 'react';
import { ModalVariant } from '../enums/Index';
import { graphQL } from '../fauna/graphQL';

const defaultState = {
  modalActive: false,
  modalVariant: null,
  items: [{}],
  toggleModal: (variant: string) => {
    variant;
  },
};

const Context = React.createContext(defaultState);

const Provider = ({ children }) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalVariant, setModalVariant] = useState<string>(null);
  const [items, setItems] = useState<Array<any>>([]);

  const toggleModal = (
    variant:
      | ModalVariant.ADD_ITEM
      | ModalVariant.DELETE_ITEM
      | ModalVariant.EDIT_ITEM
  ): void => {
    console.log(variant);
    setModalActive(!modalActive);
    setModalVariant(variant);
  };

  const returnData = async (): Promise<void> => {
    const data = await graphQL.getItems();
    setItems(data);
  };

  useEffect(() => {
    items.length === 0 && returnData();
  });

  return (
    <Context.Provider
      value={{
        modalActive,
        modalVariant,
        items,
        toggleModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

export { Provider };
