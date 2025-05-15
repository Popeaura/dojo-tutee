import { useState } from "react";

const Home = () => {

  const  [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1},
    {title: 'Welcome Party', body: 'lorem ipsum...', author: 'Gray', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Joy', id: 3},

  ])
   
    return ( 
     
     );
}
 
export default Home;