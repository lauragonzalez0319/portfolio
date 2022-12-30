import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Blog({title, image, link, colorPicked}) { 

  return (
    <div>
      <Card sx={{ width: 600, backgroundColor: colorPicked }}>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
      />
      <CardContent>
        <Typography sx={{color: "black"}} align="center" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions id="actions">
        <Button href={link} target="_blank" rel="noreferrer" className="glow-on-hover" size="medium" sx={{backgroundColor: "black", color: "white"}}>Read</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Blog