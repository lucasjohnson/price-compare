import React, { ReactElement, useState } from 'react';
import Context from '../../context/Context';
import styled from '@emotion/styled';
import AddItem from './Partials/AddItem';
import { Query } from '../../fauna/Query';
import { ButtonPrimary } from '../../emotion/Button';
import { ModalVariant } from '../../enums/Index';
import { Item } from '../../interfaces/Index';

const Form = (): any => {
  const itemDefaultData = { title: '' };
  const [data, setData] = useState<Item>(itemDefaultData);

  const handleInput = (event: MouseEvent): void => {
    const input = event.target as HTMLInputElement;

    setData((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const renderForm = (variant: ModalVariant.ADD_ITEM): ReactElement => {
    switch (variant) {
      case ModalVariant.ADD_ITEM:
        return <AddItem handleInput={handleInput} data={data} />;
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
    setData(itemDefaultData);
  };

  return (
    <Context.Consumer>
      {({ modalVariant }) => (
        <FormElement>
          {renderForm(modalVariant)}
          <ButtonPrimary onClick={(event) => handleSubmit(event, data)}>
            Save
          </ButtonPrimary>
        </FormElement>
      )}
    </Context.Consumer>
  );
};

export default Form;

const FormElement = styled.form`
  padding: 10px;
`;
