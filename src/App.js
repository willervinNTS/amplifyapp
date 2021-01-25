import logo from './logo.svg';
import mantle_logo from './favicon2.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mantle_logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my simple React application
        </p>
        <a
          className="App-link"
          href="https://nextechsol.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our website
        </a>
      </header>
    </div>
  );
}

export default App;
