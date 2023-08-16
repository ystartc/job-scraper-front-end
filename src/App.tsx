import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  Routes, 
  Route,
  Navigate
} from 'react-router-dom';

// pages:
import MainPage from './pages/main';
import SearchPage from './pages/search';
import SearchResultPage from './pages/searchResult';
import NotFoundPage from './pages/404';
import { Sign } from 'crypto';
import SignInPage from './pages/signIn';

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
          <Route path='/searchresult' element={<SearchResultPage/>}/>
          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='404' element={<NotFoundPage/>}/>
          <Route path='*' element={<Navigate to='/404' replace/>} />
        </Routes>
      </main>
      <footer className='App-footer'>
        <p>Footer</p>
      </footer>
    </section>
  );
}

export default App;
