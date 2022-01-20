import React, { useState, useEffect } from 'react';
import { FormElement, FormInnerElement } from '../../emotion/Form';
import ItemForm from './Partials/ItemForm';
import { Query } from '../../fauna/Query';
import { ButtonPrimary, ButtonSecondary } from '../../emotion/Button';
import { ModalVariant } from '../../enums/Index';
import { Item, Price } from '../../interfaces/Index';
import { PRICE_DEFAULT, ITEM_DEFAULT } from '../../fauna/DefaultState';
import Copy from '../../json/copy.json';

import {
  CREATE_ITEM,
  CREATE_PRICE,
  CREATE_ITEM_PRICE,
  UPDATE_ITEM_CREATE_PRICE,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_PRICE,
} from '../../fauna/QueryType';

interface FormProps {
  itemData: Item;
  priceData: Price;
  selectedItem: Item;
  modalVariant: string;
  toggleModal: (variant: string) => void;
  handleSetItemData: (
    data: Item | null,
    inputElement?: HTMLInputElement
  ) => void;
  handleSetPriceData: (
    data: Price | null,
    inputElement?: HTMLInputElement
  ) => void;
}

const Form: React.FC<FormProps> = ({
  itemData,
  priceData,
  selectedItem,
  modalVariant,
  toggleModal,
  handleSetItemData,
  handleSetPriceData,
}) => {
  const [activePrice, toggleActivePrice] = useState<boolean>(false);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;

    handleSetItemData(null, inputElement);
  };

  const handlePriceInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const inputElement = event.target as HTMLInputElement;

    handleSetPriceData(null, inputElement);
  };

  useEffect(() => {
    itemData.name.length === 0
      ? setIsFormDisabled(true)
      : setIsFormDisabled(false);
  }, [itemData]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    if (modalVariant === ModalVariant.ADD_ITEM) {
      if (activePrice) {
        priceData.name = itemData.name;
        Query.Post(CREATE_ITEM_PRICE, priceData);
      } else {
        Query.Post(CREATE_ITEM, itemData);
      }
    }

    if (modalVariant === ModalVariant.VIEW_ITEM) {
      if (activePrice) {
        if (itemData.name.length > 0) {
          priceData.name = itemData.name;
          priceData.id = selectedItem._id;
          Query.Post(UPDATE_ITEM_CREATE_PRICE, priceData);
        } else {
          priceData.itemId = selectedItem._id;
          Query.Post(CREATE_PRICE, priceData);
        }
      } else {
        itemData.id = selectedItem._id;
        Query.Post(UPDATE_ITEM, itemData);
      }
    }

    handleSetItemData(ITEM_DEFAULT);
    handleSetPriceData(PRICE_DEFAULT);
    toggleActivePrice(false);
  };

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    event.preventDefault();

    await Query.Post(DELETE_ITEM, { id: selectedItem._id }).then(() => {
      toggleModal(ModalVariant.DELETE_ITEM);

      selectedItem.prices.data.length > 0 &&
        selectedItem.prices.data.forEach((price) => {
          Query.Post(DELETE_PRICE, { id: price._id });
        });
    });
  };

  return (
    <FormElement>
      <FormInnerElement>
        <ItemForm
          handleInput={handleInput}
          handlePriceInput={handlePriceInput}
          toggleActivePrice={toggleActivePrice}
          activePrice={activePrice}
          item={itemData}
          price={priceData}
          variant={modalVariant}
        />
        <ButtonPrimary
          onClick={(event) => handleSubmit(event)}
          disabled={modalVariant === ModalVariant.ADD_ITEM && isFormDisabled}
        >
          {Copy.save}
        </ButtonPrimary>
        {modalVariant === ModalVariant.VIEW_ITEM && (
          <ButtonSecondary onClick={(event) => handleDelete(event)}>
            {Copy.deleteItem}
          </ButtonSecondary>
        )}
      </FormInnerElement>
    </FormElement>
  );
};

export default Form;
