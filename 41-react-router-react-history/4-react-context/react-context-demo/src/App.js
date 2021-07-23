import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Child from './Family/Child';
import ThemeProvider from './Family/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <NavBar />
        <Child />
      </ThemeProvider>
    </div>
  );
}

export default App;
