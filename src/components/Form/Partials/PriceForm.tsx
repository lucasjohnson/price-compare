import React from 'react';
import Context from '../../../context/Context';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import Checkbox from '../Fields/Checkbox';
import { InputType, FieldName } from '../../../enums/Index';
import { Price } from '../../../interfaces/Index';

interface PriceProps {
  setUseState: (
    event: React.ChangeEvent<
      HTMLFormElement | HTMLSelectElement | HTMLInputElement
    >
  ) => void;
  price: Price;
}

const PriceForm: React.FC<PriceProps> = ({ setUseState, price }) => {
  return (
    <Context.Consumer>
      {({ units, brands, stores }) => (
        <React.Fragment>
          <Input
            name={FieldName.PRICE.toLowerCase()}
            type={InputType.TEXT}
            setUseState={(event) => setUseState(event)}
            label={FieldName.PRICE}
            value={price.price}
          />
          <Input
            name={FieldName.AMOUNT.toLowerCase()}
            type={InputType.TEXT}
            setUseState={(event) => setUseState(event)}
            label={FieldName.AMOUNT}
            value={price.amount}
          />
          <Select
            name={FieldName.UNIT.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={units}
            label={FieldName.UNIT}
            value={price.unit}
          />
          <Select
            name={FieldName.STORE.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={stores}
            label={FieldName.STORE}
            value={price.store}
          />
          <Select
            name={FieldName.BRAND.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={brands}
            label={FieldName.BRAND}
            value={price.brand}
          />
          <Checkbox
            name={FieldName.BIO.toLowerCase()}
            label={FieldName.BIO}
            setUseState={(event) => setUseState(event)}
            value={price.bio}
          />
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default PriceForm;
