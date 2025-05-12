import { useState } from "react";

const Home = () => {

     const [name,setName ]  = useState('Mario');
     const [age , setAge] = useState('17');

    const handleClick = () => {
      setName('Luigi');
      };
    
   
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old </p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;