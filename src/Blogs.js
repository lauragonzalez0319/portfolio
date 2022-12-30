import React from 'react';
import Blog from './Blog';
import Grid from '@mui/material/Grid';

function Blogs({  blogs, colorPicked }) {
  const blogCards = () => {
    if (blogs !== null) {
      return blogs.map((blog) => (
        <Grid item>
          <Blog key={blog.title} title = {blog.title} image={blog.thumbnail} link={blog.link} colorPicked={colorPicked} />
        </Grid>
          
      ))
    }
  } 


  return (
    <div>
      <Grid container direction="column" rowSpacing={3} justifyContent="center" alignItems="center">
        {blogCards()}
      </Grid>
    </div>
  )
}

export default Blogs