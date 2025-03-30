const Home = () => {
    const handleClick = () => {
        console.log('Hello Ninjas');
    }


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me </button>
            <button>Click Me Again</button>
        </div>
     );
} 
 
export default Home ;