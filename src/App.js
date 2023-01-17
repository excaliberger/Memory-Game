import logo from './logo.svg';
import './App.css';
import Board from './components/board.jsx'
import HeaderBox from './components/HeaderBox.jsx'
import Cards from './components/cards.jsx'


function App() {
  return (
    <div className="App">
      <HeaderBox />
      <Board />
    </div>
  );
}

export default App;
