<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        
import './App.css';
import Navbar from './Navbar';
import Home from './home';

function App() {

  return (
<div className="App">
  <Navbar/>
  <div className="content">
    <Home/>
  </div>
</div>
  );
>>>>>>> 0c82a32c3472238ae9f41cfb61d453166bc04955
}

export default App
