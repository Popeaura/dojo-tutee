import { useState } from "react";


const Home = () => {

 const [name, setName]  =  useState('Marioo');

 const [age, setAge] = useState(19);

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
            <button onClick={handlClick}>Click Me</button><br /><br />

            <p>{age}</p>
            <button onClick={handlClickAgain}>Reveal your Age</button>
        </div>
     );
} 
 
export default Home ;