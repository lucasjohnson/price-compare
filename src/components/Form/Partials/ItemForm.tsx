import React from 'react';
import Input from '../Fields/Input';
import Icon from '../../Core/Icon';
import PriceForm from './PriceForm';
import { ButtonText, IconText } from '../../../emotion/Button';
import {
  ModalVariant,
  InputType,
  FieldName,
  IconType,
} from '../../../enums/Index';
import { Item, Price } from '../../../interfaces/Index';
import Copy from '../../../json/copy.json';

interface AddItemProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  toggleActivePrice: (activePrice: boolean) => void;
  activePrice: boolean;
  item: Item;
  price: Price;
  variant: string;
}

const AddItem: React.FC<AddItemProps> = ({
  handleInput,
  handlePriceInput,
  toggleActivePrice,
  activePrice,
  item,
  price,
  variant,
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
        name={FieldName.NAME}
        label={
          variant === ModalVariant.ADD_ITEM
            ? FieldName.NAME
            : FieldName.EDIT_NAME
        }
        type={InputType.TEXT}
        value={item.name}
      />
      <ButtonText onClick={(event) => togglePrice(event)}>
        <Icon type={IconType.PLUS} />
        <IconText>{Copy.addPrice}</IconText>
      </ButtonText>
      {activePrice && (
        <PriceForm setUseState={handlePriceInput} price={price} />
      )}
    </React.Fragment>
  );
};

export default AddItem;
