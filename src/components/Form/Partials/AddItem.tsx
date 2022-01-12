import React from 'react';
import Input from '../../Core/Input';
import { Item } from '../../../interfaces/Index';
import { InputType, FieldName } from '../../../enums/Index';

interface AddItemProps {
  handleInput: (event: MouseEvent) => void;
  data: Item;
}

const AddItem: React.FC<AddItemProps> = ({ handleInput, data }) => {
  return (
    <React.Fragment>
      <Input
        setUseState={handleInput}
        name={FieldName.TITLE.toLowerCase()}
        label={FieldName.TITLE}
        type={InputType.TEXT}
        value={data.title}
      />
    </React.Fragment>
  );
};

export default AddItem;
