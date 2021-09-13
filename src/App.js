import React,{useState} from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './redux';

function App() {
  const [car, setValue] = useState({
    yellow:false,
    red: false,
    outro: false,
  })
  function handleSetValue ({id}) {
    setValue((prev) => ({...car,[id]: !prev[id]}))
  }
  const objApp = {car,handleSetValue}

  return (
    <MyContext.Provider value={objApp}>
      <Cars />
    </MyContext.Provider>
  );
}

export default App;
