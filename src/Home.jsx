const Home = () => {

    const handleClick = (e) => {
        console.log("Hello Ninjas", e);
      };
    
      const handleClickAgain = (name) =>{
        console.log('Hallo' + name);
      }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick = {() => handleClickAgain ('Mario', e)}>Click Me again</button>
        </div>
     );
}
 
export default Home;