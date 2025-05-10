import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {


  return (
<div className="App">
  <Navbar/>
  <div className="content">
    <h1>{title}  </h1>
    <p>Liked {likes} times</p>
  </div>
</div>
  );
}

export default App;
