import React from 'react';
import './App.css';
import  Search from'./search';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          GIPHY Search
        </h2>

        <form className='gif-search' >
         
          <Search/>
        </form>
      </header>
    </div>
  );
}

export default App;
