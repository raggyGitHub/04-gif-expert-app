import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch Man',
    'Dragon Ball',
  ]);

  const onAddCategory = () => {
    setCategories([...categories, 'Demon Slayer']);
    };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={ setCategories} />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
