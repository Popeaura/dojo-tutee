const Home = () => {
    let name = 'Mario'

 const handlClick = () => {
    name = 'Luigi'
    console.log(name);
} 
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name}</p>
            <button onClick={handlClick}>Click Me</button><br /><br />
        </div>
     );
} 
 
export default Home ;