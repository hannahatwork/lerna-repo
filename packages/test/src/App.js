import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Favorite color</header>
      <select name="colors" id="colors">
        <option value="chartreuse">chartreuse</option>
        <option value="burnt-umber">burnt umber</option>
        <option value="lilac">lilac</option>
        <option value="deep-sea-blue">deep sea blue</option>
        <option value="other">other</option>
      </select>
    </div>
  );
}

export default App;