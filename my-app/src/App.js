import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts/1')
    .then(response => response.json()).then(data => setData(data));
     
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{data?.title}</h1>
        
      </header>
    </div>
  );
}

export default App;
