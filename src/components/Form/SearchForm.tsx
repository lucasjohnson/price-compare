import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import Input from './Fields/Input';
import { Item, SearchTerm, Result } from '../../interfaces/Index';
import { InputType, FieldName } from '../../enums/Index';
import { SEARCH_DEFAULT, ITEM_DEFAULT } from '../../fauna/DefaultState';
import Copy from '../../json/copy.json';

interface SearchFormProps {
  items: Item[];
}

const SearchForm: React.FC<SearchFormProps> = ({ items }) => {
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
      <li key={key}>{result.item.name}</li>
    ));

  const searchOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    threshold: 0.2,
    keys: ['name'],
  };

  const fuse = new Fuse(items, searchOptions);

  useEffect(() => {
    setSearchResults(fuse.search(searchData.searchTerm));
  }, [searchData]);

  return (
    <React.Fragment>
      <Input
        name={FieldName.SEARCH}
        type={InputType.TEXT}
        setUseState={(event) => handleSearch(event)}
        placeholder={Copy.searchPlaceholder}
      />
      <ul>{searchResults.length > 0 && renderSearchResults()}</ul>
    </React.Fragment>
  );
};

export default SearchForm;
