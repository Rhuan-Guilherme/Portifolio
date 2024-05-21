import React from 'react';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <>
      <header className="bg-gray-100 flex justify-between items-center h-16 w-full lg:px-40 p-5 fixed transition-all">
        <Header />
      </header>
      <main className="bg-gray-100 w-full px-40 h-[1900px]">ss</main>
      <footer></footer>
    </>
  );
}

export default App;
