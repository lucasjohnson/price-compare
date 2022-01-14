import React from 'react';
import { SelectElement, LabelElement } from '../../../emotion/Form';
import { Store } from '../../../interfaces/Index';

interface SelectProps {
  setUseState: (
    event: React.ChangeEvent<HTMLFormElement | HTMLSelectElement>
  ) => void;
  items: Store[];
  label?: string;
  value?: string;
}

const Select: React.FC<SelectProps> = ({
  setUseState,
  items,
  label,
  value,
}) => {
  const options = items.map((item) => {
    return item.location ? `${item.name} - ${item.location}` : item.name;
  });

  return (
    <React.Fragment>
      {label && <LabelElement>{label}</LabelElement>}
      <SelectElement value={value} onChange={(event) => setUseState(event)}>
        <option value=""></option>
        {options
          .sort((a, b) => a.localeCompare(b))
          .map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
      </SelectElement>
    </React.Fragment>
  );
};

export default Select;
