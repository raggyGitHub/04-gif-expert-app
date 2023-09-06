import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs..'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
