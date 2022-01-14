import React, { useState } from 'react';
import Input from '../Fields/Input';
import Icon from '../../Core/Icon';
import Price from './Price';
import { ButtonText, IconText } from '../../../emotion/Button';
import { Item } from '../../../interfaces/Index';
import { InputType, FieldName, IconType } from '../../../enums/Index';

interface AddItemProps {
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: Item;
}

const AddItem: React.FC<AddItemProps> = ({
  handleInput,
  handlePriceInput,
  data,
}) => {
  const [activePrice, toggleActivePrice] = useState<boolean>(false);

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
        name={FieldName.TITLE.toLowerCase()}
        label={FieldName.TITLE}
        type={InputType.TEXT}
        value={data.name}
      />
      <ButtonText onClick={(event) => togglePrice(event)}>
        <Icon type={IconType.PLUS} />
        <IconText>Add price</IconText>
      </ButtonText>
      {activePrice && <Price setUseState={handlePriceInput} />}
    </React.Fragment>
  );
};

export default AddItem;
