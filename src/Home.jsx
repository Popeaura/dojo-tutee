const Home = () => {

    const handleClick = () => {
        console.log("Hello Ninjas");
      };
    
      const handleClickAgain = (name) =>{
        console.log('Hallo' + name);
      }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={}>Click Me again</button>
        </div>
     );
}
 
export default Home;