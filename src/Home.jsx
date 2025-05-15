import { useState } from "react";

const Home = () => {

  
   
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;