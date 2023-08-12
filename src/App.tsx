import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
    <section className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='App-main'>
        <p>What are you looking for?</p>
        <SearchForm/>
      </main>
      <footer className='App-footer'>
        <p>Footer</p>
      </footer>
    </section>
  );
}

export default App;
