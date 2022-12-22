import { React, useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lauragonzalez0319";
  const [blogs, setBlogs] = useState(null);

  console.log("hey");
  
  useEffect(() => {
    console.log("hi");
    axios.get(mediumUrl)
    .then(blogs => {
      console.log("hi 2")
      setBlogs(blogs)
      console.log(blogs)
    })
  }, [])

  return (
    <div>Blogs</div>
  )
}

export default Blogs