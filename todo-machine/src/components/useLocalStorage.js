import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    // simulamos el tiempo de espera del local storate como 
    // si se tratase de consumir una API
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;

        if (!localStorageItem){
          // si localStorageItem esta vacio se crea un array el cual luego se puede poblar y
          // utilizar con JSON.parse en el estado de Item
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem= [];
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    },1000)
  })
  
  // funcion para guardar los Item en el estado pero ademas
  // PARA PERSISTIR LOS ITEM EN EL LOCAL STORAGE
  const saveItem= (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error){
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };