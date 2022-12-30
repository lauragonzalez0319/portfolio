import { React, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Projects({ colorPicked }) {
  const [floExpanded, setFloExpanded] = useState(false);
  const [tinExpanded, setTinExpanded] = useState(false);
  const [starExpanded, setStarExpanded] = useState(false);
  const [forkExpanded, setForkExpanded] = useState(false);

  const handleFloExpandClick = () => {
    setFloExpanded(!floExpanded);
  };

  const handleTinExpandClick = () => {
    setTinExpanded(!tinExpanded);
  };

  const handleStarExpandClick = () => {
    setStarExpanded(!starExpanded);
  };

  const handleForkExpandClick = () => {
    setForkExpanded(!forkExpanded);
  };

  return (
    <div className="projects">
      <Grid container spacing={3} justifyContent="center" >
      <Grid item>
      <Card sx={{ maxWidth: 450, backgroundColor: colorPicked }}>
        <CardMedia
          sx={{ height: 300 }}
          image="/floMind.jpeg"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h4" component="div">
            FloMind
          </Typography>
          <Typography sx={{fontStyle: 'italic' }} align="center" gutterBottom variant="h5" component="div">
            Womxn's Health App
          </Typography>
          <Typography variant="body" align="center">
          Fullstack Womxn’s Health app offering menstrual tracking, wellness reminders, and reproductive health educational content 
          </Typography>
        </CardContent>
        <CardActions>
          <Button href="https://www.loom.com/share/64d75ccfa8d148ca8431fe8bc6af4483" size="small" sx={{backgroundColor: "black", color: "white"}}>Watch Demo</Button>
          <Button href="https://github.com/lauragonzalez0319/flomind" size="small" sx={{backgroundColor: "black", color: "white"}}>Code Repo</Button>
          <ExpandMore
          expand={floExpanded}
          onClick={handleFloExpandClick}
          aria-expanded={floExpanded}
          aria-label="show more"
          >
          <ExpandMoreIcon sx={{color: "white", backgroundColor: "black"}} />
        </ExpandMore>
        </CardActions>
        <Collapse in={floExpanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography gutterBottom variant="body" component="div" align="center">
            <ul>
              <li>Created mathematical algorithms using server-side Ruby on Rails data to predict user’s next menstrual cycle and future dates of self breast exam, yearly gynecological checkup using a user authenticated profile database</li>
              <li>Integrated React Big Calendar library for a customized health tracking calendar and reminder system</li>
              <li>Implemented colorful styling with Semantic UI Library and CSS to promote an inclusive user experience that strays from the heteronormative “all pink” women’s health app industry standard</li>
            </ul>
          </Typography>
          </CardContent>
        </Collapse>
        </Card>
        </Grid>

        <Grid item>
        <Card sx={{ maxWidth: 450, backgroundColor: colorPicked }}>
        <CardMedia
          sx={{ height: 300 }}
          image="/tindog.jpg"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h4" component="div">
            Tindog 
          </Typography>
          <Typography sx={{fontStyle: 'italic' }} align="center" gutterBottom variant="h5" component="div">
             "Tinder but for dogs"
          </Typography>
          <Typography variant="body" align="center">
          Fullstack online dating app for dogs modeled after Tinder®, which allows user to build their profile and reject/approve other dogs in the dating pool
          </Typography>
        </CardContent>
        <CardActions id="actions">
          <Button href="https://www.loom.com/share/49f16be348a24c52ac8ca7da6cb361ec" size="small" sx={{backgroundColor: "black", color: "white"}}>Watch Demo</Button>
          <Button href="https://github.com/lauragonzalez0319/dog-tinder" size="small" sx={{backgroundColor: "black", color: "white"}}>Code Repo</Button>
          <ExpandMore
          expand={tinExpanded}
          onClick={handleTinExpandClick}
          aria-expanded={tinExpanded}
          aria-label="show more"
          >
          <ExpandMoreIcon sx={{color: "white", backgroundColor: "black"}} />
        </ExpandMore>
        </CardActions>
        <Collapse in={tinExpanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography gutterBottom variant="body" component="div" align="center">
            <ul>
              <li>Implemented user authorization and authentication with Ruby Bcrypt password encryption for maximized security</li>
              <li>Built server-side Ruby on Rails algorithms for determining mutual matches and eligibility using Active Record querying and associations</li>
              <li>Optimized swipe-style interactivity and appealing visuals using Semantic UI Library on ReactJS frontend</li>
            </ul>
          </Typography>
          </CardContent>
        </Collapse>
        </Card>
        </Grid>

        <Grid item>
        <Card sx={{ maxWidth: 450, backgroundColor: colorPicked }}>
        <CardMedia
          sx={{ height: 300 }}
          image="/forge-your-destiny.jpg"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h4" component="div">
            Forge Your Destiny
          </Typography>
          <Typography sx={{fontStyle: 'italic' }} align="center" gutterBottom variant="h5" component="div">
             Star Wars Lightsaber Cataloger
          </Typography>
          <Typography variant="body" align="center">
          Fullstack app that that catalogs large Star Wars character lightsaber information. User can add themselves to database as a Jedi or Sith
          </Typography>
        </CardContent>
        <CardActions id="actions">
          <Button href="https://github.com/nickwarren47/phase-3-sinatra-react-project" size="small" sx={{backgroundColor: "black", color: "white"}}>Code Repo</Button>
          <ExpandMore
          expand={starExpanded}
          onClick={handleStarExpandClick}
          aria-expanded={starExpanded}
          aria-label="show more"
          >
            <ExpandMoreIcon sx={{color: "white", backgroundColor: "black"}} />
          </ExpandMore>       
        </CardActions>
        <Collapse in={starExpanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography gutterBottom variant="body" component="div" align="center">
            <ul>
              <li>Built server-side Ruby on Sinatra database to catalog characters and their associated lightsabers as well as user-added character</li>
              <li>Implemented CRUD operations with Active Record Associations and Ruby</li>
              <li>Styled with Semantic UI library for enhanced user design and functionality</li>
            </ul>
          </Typography>
          </CardContent>
        </Collapse>
        </Card>
        </Grid>

        <Grid item>
        <Card sx={{ maxWidth: 450, backgroundColor: colorPicked }}>
        <CardMedia
          sx={{ height: 300 }}
          image="/fork-it.png"
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h4" component="div">
            Fork It
          </Typography>
          <Typography sx={{fontStyle: 'italic' }} align="center" gutterBottom variant="h5" component="div">
            Recipe Finder
          </Typography>
          <Typography variant="body" align="center">
          Frontend app that outputs recipes using user's on-hand ingredient search query. User can favorite recipes, and add missing ingredients to shopping list.
          </Typography>
        </CardContent>
        <CardActions id="actions">
          <Button href="https://www.loom.com/share/97f092b2d3a14136aaeacb39599d416c" size="small" sx={{backgroundColor: "black", color: "white"}}>Watch Demo</Button>
          <Button href="https://github.com/kgicheha/recipe-finder" size="small" sx={{backgroundColor: "black", color: "white"}}>Code Repo</Button>
          <ExpandMore
            expand={forkExpanded}
            onClick={handleForkExpandClick}
            aria-expanded={forkExpanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{color: "white", backgroundColor: "black"}} />
          </ExpandMore>    
        </CardActions>
        <Collapse in={forkExpanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography gutterBottom variant="body" component="div" align="center">
            <ul>
              <li>Implemented a RESTful API architectural style to retrieve json formatted data from Spoonacular API utilized for CRUD operations</li>
              <li>Designed visually appealing and user-friendly webpage using CSS styling</li>
              <li>Enhanced functionality by incorporating recipe favoriting and ingredient shopping list features</li>
            </ul>
          </Typography>
          </CardContent>
        </Collapse>
        </Card>
        </Grid>

      </Grid>
    </div>
  )
}

export default Projects