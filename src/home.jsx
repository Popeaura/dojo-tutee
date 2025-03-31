import { useState } from "react";


const Home = () => {
 const [blogs, setBlogst] = useState ([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1}
 ])
    return ( 
        <div className="home">
        </div>
     );
} 
 
export default Home ;