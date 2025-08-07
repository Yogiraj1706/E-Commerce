

import React, { createContext, useState } from 'react'

export let ThemeContext=createContext()

function ThemeProvider(props) {

    let[theme,settheme]=useState('light')
  return (
    <div>
      <ThemeContext.Provider value={{theme,settheme}}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
