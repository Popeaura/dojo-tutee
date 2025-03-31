import { useState } from "react";


const Home = () => {

 const [name, setName]  =  useState('Marioo');

 const [age, setAge] = useState(19);

 const handleClick = () => {
    setName('Luigi ');
    setAge (21);
} 


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years  old</p>
            <button onClick={handleClick}>Click Me</button><br /><br />
        </div>
     );
} 
 
export default Home ;