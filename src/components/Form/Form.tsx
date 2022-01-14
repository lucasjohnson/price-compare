import React, { ReactElement, useState } from 'react';
import Context from '../../context/Context';
import { FormElement, FormInnerElement } from '../../emotion/Form';
import AddItem from './Partials/AddItem';
import { Query } from '../../fauna/Query';
import { ButtonPrimary } from '../../emotion/Button';
import { ModalVariant } from '../../enums/Index';
import { Item, Price } from '../../interfaces/Index';
import { PRICE_DATA, ITEM_DATA } from '../../fauna/QueryType';

const Form = (): any => {
  const [itemData, setItemData] = useState<Item>(ITEM_DATA);
  const [priceData, setpriceData] = useState<Price>(PRICE_DATA);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    setItemData((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const handlePriceInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const element = event.target as HTMLInputElement;

    setpriceData((prev) => ({
      ...prev,
      [element.name]:
        element.type === 'checkbox' ? element.checked : element.value,
    }));
  };

  const renderForm = (variant: ModalVariant.ADD_ITEM): ReactElement => {
    switch (variant) {
      case ModalVariant.ADD_ITEM:
        return (
          <AddItem
            handleInput={handleInput}
            handlePriceInput={handlePriceInput}
            data={itemData}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: Item
  ): void => {
    event.preventDefault();
    Query.createItem(data);
    setItemData(ITEM_DATA);
  };

  return (
    <Context.Consumer>
      {({ modalVariant }) => (
        <FormElement>
          <FormInnerElement>
            {renderForm(modalVariant)}
            <ButtonPrimary onClick={(event) => handleSubmit(event, itemData)}>
              Save
            </ButtonPrimary>
          </FormInnerElement>
        </FormElement>
      )}
    </Context.Consumer>
  );
};

export default Form;
