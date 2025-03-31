const Home = () => {

 const handlClick = () => {
    console.log("Hello Ninjas");
 }  
 
 const handleClickAgain = (name) => {
    console.log("Hello "  + (name));
 }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handlClick}>Click Me</button><br /><br />
            <button onClick={() => {handleClickAgain("Ahura")}}>Ninjas </button>
        </div>
     );
} 
 
export default Home ;