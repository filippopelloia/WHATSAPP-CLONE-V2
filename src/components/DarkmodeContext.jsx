import React, {useState, createContext} from 'react'

export const ChangemodeContext = createContext({mode: false});
export default function DarkmodeContext(props) {

  const [mode, setMode] = useState(false);

  function changeMode(){
    setMode(prevMode => !prevMode);
  }

  return (
    <ChangemodeContext.Provider value={{mode, changeMode}}>
        {props.children}
    </ChangemodeContext.Provider>
  )
}
