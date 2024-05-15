import { createContext, useState } from 'react';

// Créer le context
const NamesContext = createContext();

// Créer le provider
export const NamesProvider = ({ children }) => {
  const [names, setNames] = useState([]);

  const addName = (name) => {
    setNames([...names, name]);
  };

  const deleteName = (index) => {
    setNames(names.filter((e, i) => i != index));
  }

  return (
    <NamesContext.Provider value={{ names, addName, deleteName }}>
      {children}
    </NamesContext.Provider>
  );
};

export default NamesContext;
