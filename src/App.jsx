import './App.css'
import Navbar from './Navbar';  

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  const link = "http://www.google.com"

  return (
  <div className="className">
    <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} times</p>

      <p>{10}</p>
      <p>{"Hello Ninjas"}</p>
      <p>{[1,2,3,4,5,6,7]}</p>
      <p>{Math.random() * 10}</p>

    <a href={link}>Google site</a>
    </div>
  </div>
  );
}

export default App
