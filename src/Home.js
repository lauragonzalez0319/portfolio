import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Home() {
  return (
    <div id="home">
      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 300, height: 400 }}>
        <CardMedia
          component="img"
          height="500"
          width= "300"
          image={require('./assets/headshot.jpeg')}
          alt="Laura Gonzalez headshot"
        />
        <CardMedia
          component="img"
          height="400"
          width= "300"
          image={require('./assets/skills.png')}
          alt="skills"
        />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column',  width: 1100 }}>
        <CardContent>
        <Typography variant="h5" align="center" sx={{color: "black", padding: "1em"}}>
          Welcome to my portfolio!
        </Typography>
        <Typography variant="h6" align="center" sx={{color: "black", padding: "1em"}}>
          My name is Laura Gonzalez and I am Fullstack Software Engineer seeking employment with a company where diversity and creative freedom are valued in building technologies that enrich the lives of others through resourceful problem solving. I recently graduated from Flatiron School where I studied and implemented the full software development life cycle by learning the conceptual framework and implementation of HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, SQLite3, PostgreSQL, Active Record, Sinatra, Semantic UI, and Material UI through technical practice and inventive projects. Check out my projects in my "Projects" section.
          <br />
        </Typography>
        <Typography variant="h6" align="center" sx={{color: "black", padding: "1em"}}>
          Prior to beginning my self-taught and Flatiron School learning journey, I was able to develop a foundation in engineering at Cornell University for 3 years where I fed my passions for math, physics, and problem solving. My experience in Electrical Engineering research and Operations Research and Information Engineering ultimately led me to discover my fascination and enthusiasm for software engineering, leading me to dive into my interest further. 
          <br />
        </Typography>
        <Typography variant="h6" align="center" sx={{color: "black", padding: "1em"}}>
          I plan to continue expanding my skillset and sharpening my programming abilities as I seek employment. Stay up-to-date with my progress with my social platforms on the left!
        </Typography>
        </CardContent>
        </Box>
    </Card>
    </div>
  )
}

export default Home