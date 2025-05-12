const Home = () => {
  let name = 'Mario';

    const handleClick = () => {
      name = 'Luigi';
      };
    

    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;