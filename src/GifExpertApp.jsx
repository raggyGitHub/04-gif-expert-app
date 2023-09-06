import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch Man',
    'Dragon Ball',
  ]);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
    /**opcionalmente */

    //setCategories(cat => [...cat,'Valorant']);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* <AddCategory onNewCategory={(event) => onAddCategory(event)} /> */}

      <AddCategory onNewCategory={onAddCategory} />
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
