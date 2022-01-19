import React from 'react';
import { InputElement, LabelElement } from '../../../emotion/Form';

interface InputProps {
  name: string;
  type: string;
  setUseState: (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ) => void;
  label?: string;
  value?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  setUseState,
  label,
  value,
  placeholder,
}) => (
  <React.Fragment>
    {label && <LabelElement>{label}</LabelElement>}
    <InputElement
      type={type}
      name={name.toLowerCase()}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setUseState(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
