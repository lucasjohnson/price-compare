import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import styled from '@emotion/styled';
import Input from './Fields/Input';
import Icon from '../Core/Icon';
import { Item, SearchTerm, Result } from '../../interfaces/Index';
import {
  ModalVariant,
  InputType,
  FieldName,
  IconType,
} from '../../enums/Index';
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

  const handleModalToggle = (result: Result): void => {
    toggleModal(ModalVariant.VIEW_ITEM, result.item);
    clearSearchInput();
  };

  const clearSearchInput = (): void => {
    setSearchData(SEARCH_DEFAULT);
  };

  const renderSearchResults = (): HTMLUListElement =>
    searchResults.map((result: Result, key: number) => (
      <li key={key}>
        <ButtonTrigger onClick={() => handleModalToggle(result)}>
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
      <SearchWrapper>
        <Input
          name={FieldName.SEARCH}
          type={InputType.TEXT}
          setUseState={(event) => handleSearch(event)}
          placeholder={Copy.searchPlaceholder}
          value={searchData.searchterm}
        />
        {searchData.searchterm.length > 0 && (
          <ClearButton onClick={clearSearchInput}>
            <Icon type={IconType.CROSS} />
          </ClearButton>
        )}
      </SearchWrapper>
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

const SearchWrapper = styled.div`
  position: relative;
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

const ClearButton = styled.button`
  width: 25px;
  height: 25px;
  color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  position: absolute;
  right: 6px;
  top: 8px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;
