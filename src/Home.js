import { useState, useEffect, use } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

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
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Home;
