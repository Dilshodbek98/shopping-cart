import React, {useState} from 'react'

export const SelectedContext = React.createContext()

function SelectedProvider({children}) {
  const [selected, setSelected] = useState([]);
  return (
    <SelectedContext.Provider value={[selected, setSelected]}>
      {children}
    </SelectedContext.Provider>
  );
}

export default SelectedProvider