import { useState } from "react";


const Home = () => {
 const [blogs, setBlogst] = useState ([
    {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1}
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2}
    {title: 'Web dev tips', body: 'lorem ipsum...', author: 'Mario', id: 3}
])
    return ( 
        <div className="home">
            {blogs.map((blog) => {
                <div className="blog-preview">
                    
                </div>
            })}
        </div>
     );
} 
 
export default Home ;