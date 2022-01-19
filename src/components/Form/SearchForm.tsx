import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import styled from '@emotion/styled';
import Input from './Fields/Input';
import { Item, SearchTerm, Result } from '../../interfaces/Index';
import { ModalVariant, InputType, FieldName } from '../../enums/Index';
import { SEARCH_DEFAULT, ITEM_DEFAULT } from '../../fauna/DefaultState';
import Copy from '../../json/copy.json';

interface SearchFormProps {
  items: Item[];
  toggleModal: (variant: string, item?: Item) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ items, toggleModal }) => {
  const [searchData, setSearchData] = useState<SearchTerm>(SEARCH_DEFAULT);
  const [searchResults, setSearchResults] = useState<any>([ITEM_DEFAULT]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLFormElement | HTMLInputElement>
  ): void => {
    const input = event.target as HTMLInputElement;

    setSearchData((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const renderSearchResults = (): HTMLUListElement =>
    searchResults.map((result: Result, key: number) => (
      <li key={key}>
        <ButtonTrigger
          onClick={() => toggleModal(ModalVariant.VIEW_ITEM, result.item)}
        >
          {result.item && result.item!.name}
        </ButtonTrigger>
      </li>
    ));

  const searchOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    threshold: 0.2,
    keys: ['name'],
  };

  const fuse = new Fuse(items, searchOptions);

  useEffect(() => {
    setSearchResults(fuse.search(searchData.searchterm));
  }, [searchData]);

  return (
    <React.Fragment>
      <Input
        name={FieldName.SEARCH}
        type={InputType.TEXT}
        setUseState={(event) => handleSearch(event)}
        placeholder={Copy.searchPlaceholder}
      />
      <ResultsWrapper>
        <Ul>{searchResults.length > 0 && renderSearchResults()}</Ul>
      </ResultsWrapper>
    </React.Fragment>
  );
};

export default SearchForm;

const ResultsWrapper = styled.div`
  position: relative;
  top: -11px;
`;

const Ul = styled.ul`
  width: 100%;
  position: absolute;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-top: none;
  border-radius: 0 0 3px 3px;
`;

const ButtonTrigger = styled.button`
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  text-align: left;
  border: none;
  background-color: transparent;
`;
