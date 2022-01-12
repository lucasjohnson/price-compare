import React from 'react';
import styled from '@emotion/styled';

interface Props {
  name: string;
  type: string;
  setUseState: (event: MouseEvent) => void;
  label?: string;
  value?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  name,
  type,
  setUseState,
  label,
  value,
  placeholder,
}) => (
  <React.Fragment>
    {label && <label>{label}</label>}
    <InputElement
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setUseState(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;

export const InputElement = styled.input`
  background-color: #fff;
  color: #000;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 2px;
`;
