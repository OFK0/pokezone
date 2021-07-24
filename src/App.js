/*
github.com/ofk0
*/

import pokemonLogo from './images/pokemon-logo.png';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="pokezone">
      <div className="logo-container">
        <img id="logo" src={pokemonLogo} alt="Pokemon Logo" />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
