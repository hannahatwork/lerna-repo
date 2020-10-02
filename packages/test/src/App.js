import React from 'react';
import './App.css';
import * as r from "ramda";

function App() {
  return (
    <div className="App">
      <header>Favorite color</header>
      <select name="colors" id="colors">
        <option value="chartreuse">chartreuse</option>
        <option value="burnt-umber">burnt umber</option>
        <option value="lilac">lilac</option>
        <option value="deep-sea-blue">deep sea blue</option>
        <option value="deep-space-black">{r.toLower("DEEP SPACE BLACK")}</option>
        <option value="other">other</option>
      </select>
    </div>
  );
}

export default App;