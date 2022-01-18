import React, { ReactElement, useState, useEffect } from 'react';
import Context from '../../context/Context';
import { FormElement, FormInnerElement } from '../../emotion/Form';
import AddItemForm from './Partials/AddItemForm';
import { Query } from '../../fauna/Query';
import { ButtonPrimary } from '../../emotion/Button';
import { ModalVariant, InputType } from '../../enums/Index';
import { Item, Price } from '../../interfaces/Index';
import { CREATE_ITEM, CREATE_ITEM_PRICE } from '../../fauna/QueryType';
import { PRICE_DEFAULT, ITEM_DEFAULT } from '../../fauna/DefaultState';
import Copy from '../../json/copy.json';

const Form = (): any => {
  const [itemData, setItemData] = useState<Item>(ITEM_DEFAULT);
  const [priceData, setPriceData] = useState<Price>(PRICE_DEFAULT);
  const [activePrice, toggleActivePrice] = useState<boolean>(false);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true);

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

    setPriceData((prev) => ({
      ...prev,
      [element.name]:
        element.type === InputType.CHECKBOX ? element.checked : element.value,
    }));
  };

  useEffect(() => {
    itemData.name.length === 0
      ? setIsFormDisabled(true)
      : setIsFormDisabled(false);
  }, [itemData]);

  const renderForm = (variant: ModalVariant.ADD_ITEM): ReactElement => {
    switch (variant) {
      case ModalVariant.ADD_ITEM:
        return (
          <AddItemForm
            handleInput={handleInput}
            handlePriceInput={handlePriceInput}
            toggleActivePrice={toggleActivePrice}
            activePrice={activePrice}
            item={itemData}
            price={priceData}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();

    if (activePrice) {
      priceData.name = itemData.name;
      Query.Post(CREATE_ITEM_PRICE, priceData);
      setPriceData(PRICE_DEFAULT);
      setItemData(ITEM_DEFAULT);
      toggleActivePrice(false);
    } else {
      Query.Post(CREATE_ITEM, itemData);
      setItemData(ITEM_DEFAULT);
    }
  };

  return (
    <Context.Consumer>
      {({ modalVariant }) => (
        <FormElement>
          <FormInnerElement>
            {renderForm(modalVariant)}
            <ButtonPrimary
              onClick={(event) => handleSubmit(event)}
              disabled={isFormDisabled}
            >
              {Copy.save}
            </ButtonPrimary>
          </FormInnerElement>
        </FormElement>
      )}
    </Context.Consumer>
  );
};

export default Form;
