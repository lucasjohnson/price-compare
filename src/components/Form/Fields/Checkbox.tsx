import React from 'react';
import { CheckboxElement } from '../../../emotion/Form';
import { LabelElement } from '../../../emotion/Form';
import { InputType } from '../../../enums/Index';

interface CheckboxProps {
  name: string;
  setUseState: (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => void;
  value: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  setUseState,
  value,
  label,
}) => (
  <React.Fragment>
    {label && <LabelElement>{label}</LabelElement>}
    <CheckboxElement
      type={InputType.CHECKBOX}
      name={name}
      onChange={(event) => setUseState(event)}
      checked={value}
    />
  </React.Fragment>
);

export default Checkbox;
