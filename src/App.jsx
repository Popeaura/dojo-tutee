 import Navbar from './Navbar';  
 import Home from './home.jsx'


function App() {
  const title = 'Welcome to the new Blog';

  return (
<div className="App">
  <Navbar/>
  <div className="content">
  <Home/>
  </div>
</div>
  );
}

export default App
