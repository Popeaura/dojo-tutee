const Home = () => {
    const handleClick = () => {
        console.log('Hello Ninjas');
    }

    const handleClickAgain = () =>{
        console.log("Hello Ninjas Again");
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me </button>
            <button onClick={}>Click Me Again</button>
        </div>
     );
} 
 
export default Home ;