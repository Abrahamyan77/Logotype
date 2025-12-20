import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  const [searchInput, setSearchInput] = useState('');
  
  return (
    <div className="App">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Home searchInput={searchInput} />
    </div>
  );
}

export default App;
