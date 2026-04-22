import { useState, useEffect, use } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      // get the response and convert it to json
      .then((res) => {
        return res.json();
      })
      // get the json data and set it to the blogs state
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="Home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
