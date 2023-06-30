// import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const options = [
    // { label:'Select',value:'Select'},
    { key:1, label: 'Yes', value: 'Yes' },
    { key:2, label: 'Probably Not', value: 'No' }
  ];
 
  const [value, setValue] = useState('fruit');
 
  const handleChange = (event) => {     
    setValue(event.target.value);
  };

  return (
    <div className="App">
      
      <div id="drpdwn-cont"> 

          <label >
            Should You use a Dropdown? 
          </label>

            <select value={value} onChange={handleChange} name="select" placeholder="Select">
              {options.map((option) => (
                <option key={option.key} value={option.value}>{option.label}</option>
              ))}
            </select>
          
      </div>
    </div>
  );
}

export default App;
