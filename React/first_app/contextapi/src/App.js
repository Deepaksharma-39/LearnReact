import './App.css';
import ToggleComponent from './Component/ToggleComponent';

import { AppContext } from './context/ContextProvider';
import { useContext } from 'react';


export default function App() {
  const value=useContext(AppContext);
  console.log(value)
  return (
    <div className="App">
      
       <h1>Theme</h1>
        <h2>{value.theme}</h2>
      <ToggleComponent/>
    </div>
  );
}

