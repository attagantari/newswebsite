import React from 'react'
import './newsdetails.css';
import NewsList from './components/NewsList/NewsList';
import Beranda from './pages/Beranda/Beranda';

function App() {
  return (
    <div className="App">
      <Navbar>
        <li className='active'>
          <a href="/Beranda">Beranda</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
      </Navbar>
      <Beranda />
      <NewsList />
    </div>
  );
}

export default App;
