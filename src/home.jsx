import { useState } from "react";


const Home = () => {

 const [name, setName]  =  useState('Marioo');

 const handlClick = () => {
    setName('Luigi ');
} 
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handlClick}>Click Me</button>
        </div>
     );
} 
 
export default Home ;