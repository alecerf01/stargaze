import logo from './logo.svg';
import './App.css';

import axios from 'axios';



function App() {

  var url = `https://images-api.nasa.gov/search?q=leo`;
  console.log(url)
  axios.get(url)
      .then(function(response) {
              console.log(response.data.collection.items[0].links[0].href); 
});

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
      </header>
    </div>
  );
}

export default App;
