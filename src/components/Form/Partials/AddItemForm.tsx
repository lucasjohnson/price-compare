import React from 'react';
import Input from '../Fields/Input';
import Icon from '../../Core/Icon';
import PriceForm from './PriceForm';
import { ButtonText, IconText } from '../../../emotion/Button';
import { InputType, FieldName, IconType } from '../../../enums/Index';
import { Item, Price } from '../../../interfaces/Index';

interface AddItemProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleActivePrice: (activePrice: boolean) => void;
  activePrice: boolean;
  item: Item;
  price: Price;
}

const AddItem: React.FC<AddItemProps> = ({
  handleInput,
  handlePriceInput,
  toggleActivePrice,
  activePrice,
  item,
  price,
}) => {
  const togglePrice = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    toggleActivePrice(!activePrice);
  };

  return (
    <React.Fragment>
      <Input
        setUseState={handleInput}
        name={FieldName.NAME.toLowerCase()}
        label={FieldName.NAME}
        type={InputType.TEXT}
        value={item.name}
      />
      <ButtonText onClick={(event) => togglePrice(event)}>
        <Icon type={IconType.PLUS} />
        <IconText>Add price</IconText>
      </ButtonText>
      {activePrice && (
        <PriceForm setUseState={handlePriceInput} price={price} />
      )}
    </React.Fragment>
  );
};

export default AddItem;
