const Home = () => {
    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = (name) =>{
        console.log("Hello" + " " + name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me </button><br /><br />
            <button onClick={() =>{
         handleClickAgain("Marioo")
            }}>Click Me Again</button>
        </div>
     );
} 
 
export default Home ;