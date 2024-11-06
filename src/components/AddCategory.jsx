// import React from 'react'

import { useState } from "react";

export const AddCategory = ({ OnNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const inputValue2 = inputValue.trim()
    if (inputValue2.length > 0) {
      // setCategories(categories => [inputValue, ...categories]) //Forma 1
      OnNewCategory(inputValue2)
      setInputValue('')
    }//? condicion para que no inserte valores vacios

  }
  return (
    <form onSubmit={onSubmit}>
      <input
        id="idCate"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>

  )
}
