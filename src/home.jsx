import { useState } from "react";


const Home = () => {

 const [name, setName]  =  useState('Marioo');
 const [age, setAge] = useState(19)

 const handlClick = () => {
    setName('Luigi ');
} 

 const handlClickAgain = () => {
    setAge (21);
 }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handlClick}>Click Me</button>
            <button onClick={handlClickAgain}>Revea your Age</button>
        </div>
     );
} 
 
export default Home ;