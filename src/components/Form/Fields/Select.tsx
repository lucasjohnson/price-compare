import React from 'react';
import { SelectElement, LabelElement } from '../../../emotion/Form';
import { Store, Brand, Unit } from '../../../interfaces/Index';

interface SelectProps {
  setUseState: (
    event: React.ChangeEvent<HTMLFormElement | HTMLSelectElement>
  ) => void;
  items: Store[] | Brand[] | Unit[];
  name: string;
  label?: string;
  value?: string;
}

const Select: React.FC<SelectProps> = ({
  setUseState,
  items,
  name,
  label,
  value,
}) => {
  const options = items.map((item: any): string[] => {
    return item.location ? `${item.name} - ${item.location}` : item.name;
  });

  return (
    <React.Fragment>
      {label && <LabelElement>{label}</LabelElement>}
      <SelectElement
        name={name}
        value={value}
        onChange={(event) => setUseState(event)}
      >
        <option value=""></option>
        {options
          .sort((a: string, b: string) => a.localeCompare(b))
          .map((item: string, index: number) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
      </SelectElement>
    </React.Fragment>
  );
};

export default Select;
