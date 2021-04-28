import React, { useState } from 'react';
import debounce from 'lodash.debounce';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './styles.scss';

const places: string[] = ['Anglia', 'Polska', 'Hiszpania', 'Włochy'];

function SearchInput(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  function searchPlaces() {
    console.log(inputValue);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="search-input">
      <Input
        className="input"
        type="input"
        name="input"
        placeholder="Whrite city, road"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={searchPlaces} className="button" buttonText="search" />
      {places.map((elem) => (
        <ul key={elem}>
          <li>{elem}</li>
        </ul>
      ))}
    </div>
  );
}

export default SearchInput;
