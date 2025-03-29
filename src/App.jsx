import './App.css'
import Navbar from './Navbar';  

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const link = "http://www.google.com"

  return (
<div className="App">
  <Navbar/>
  <div className="content">
    <h1>App </h1>
  </div>
</div>
  );
}

export default App
