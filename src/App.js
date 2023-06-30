// import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const options = [
    { key:1, label:'Select',value:'Select'},
    { key:2, label: 'Yes', value: 'Yes' },
    { key:3, label: 'Probably Not', value: 'No' }
  ];
 
  const [value, setValue] = useState('');
 
  const handleChange = (event) => {     
    setValue(event.target.value);
  };

  return (
    <div className="App">
      
      <div id="container"> 
          <label className="label">
            Should you use a dropdown? 
          </label>

            <select value={value} onChange={handleChange} name="select" placeholder="Select">
              {options.map((option) => (
                <option  key={option.key} value={option.value}>{option.label}</option>
              ))}
            </select>
      </div>
      
    </div>
  );
}

export default App;
