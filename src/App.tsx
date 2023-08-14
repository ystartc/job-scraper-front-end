import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  Routes, 
  Route,
  // Link,
  Navigate
} from 'react-router-dom';

// pages:
import SearchPage from './pages/search';
import MainPage from './pages/main';

const App: React.FC = () => {
  return (
    <section className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='App-main'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/' element={<Navigate to='/search' replace/>} />
          <Route path='/search' element={<Navigate to='/' replace/>} />
        </Routes>
      </main>
      <footer className='App-footer'>
        <p>Footer</p>
      </footer>
    </section>
  );
}

export default App;
