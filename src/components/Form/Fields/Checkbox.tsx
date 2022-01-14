import React from 'react';
import { CheckboxElement } from '../../../emotion/Form';
import { LabelElement } from '../../../emotion/Form';
import { InputType } from '../../../enums/Index';

interface CheckboxProps {
  name: string;
  setUseState: (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => void;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, setUseState, label }) => (
  <React.Fragment>
    {label && <LabelElement>{label}</LabelElement>}
    <CheckboxElement
      type={InputType.CHECKBOX}
      name={name}
      onChange={(event) => setUseState(event)}
    />
  </React.Fragment>
);

export default Checkbox;
