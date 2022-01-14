import React from 'react';
import Context from '../../../context/Context';
import Input from '../Fields/Input';
import Select from '../Fields/Select';
import Checkbox from '../Fields/Checkbox';
import { InputType, FieldName } from '../../../enums/Index';

interface PriceProps {
  setUseState: (
    event: React.ChangeEvent<
      HTMLFormElement | HTMLSelectElement | HTMLInputElement
    >
  ) => void;
}

const Price: React.FC<PriceProps> = ({ setUseState }) => {
  return (
    <Context.Consumer>
      {({ units, brands, stores }) => (
        <React.Fragment>
          <Input
            name={FieldName.PRICE.toLowerCase()}
            type={InputType.TEXT}
            setUseState={(event) => setUseState(event)}
            label={FieldName.PRICE}
          />
          <Input
            name={FieldName.AMOUNT.toLowerCase()}
            type={InputType.TEXT}
            setUseState={(event) => setUseState(event)}
            label={FieldName.AMOUNT}
          />
          <Select
            name={FieldName.UNIT.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={units}
            label={FieldName.UNIT}
          />
          <Select
            name={FieldName.STORE.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={stores}
            label={FieldName.STORE}
          />
          <Select
            name={FieldName.BRAND.toLowerCase()}
            setUseState={(event) => setUseState(event)}
            items={brands}
            label={FieldName.BRAND}
          />
          <Checkbox
            name={FieldName.BIO.toLowerCase()}
            label={FieldName.BIO}
            setUseState={(event) => setUseState(event)}
          />
        </React.Fragment>
      )}
    </Context.Consumer>
  );
};

export default Price;
