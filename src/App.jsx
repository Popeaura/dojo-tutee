import './App.css'
import Navbar from './Navbar';  
import Home from './home.jsx'


function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const link = "http://www.google.com"

  return (
<div className="App">
  <Navbar/>
  <div className="content">
  </div>
</div>
  );
}

export default App
