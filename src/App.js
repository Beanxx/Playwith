import './App.css';
import back_ground from './image/party.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={back_ground} resizeMode="cover" alt="profile"/>
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
