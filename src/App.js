import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Contact from "./Contact";
import './index.css';
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material";
import { CompactPicker } from 'react-color';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function App() {
  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lauragonzalez0319";
  const [blogs, setBlogs] = useState(null);
  const [colorPicked, setColorPicked] = useState("#94a1b2")

  useEffect(() => {
    axios.get(mediumUrl)
    .then(res => {
      setBlogs(res.data.items);
    })
  }, [])

  const theme = createTheme({
    typography: {
      fontFamily: ['Bogart', 'sans-serif'].join(","),
    }
  });

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  function handleColorChange(color) {
    setColorPicked(color.hex);
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar colorPicked={colorPicked}/>
      <Offset />
      <Grid container sx={{backgroundColor: colorPicked}}>
        <Grid item xs={9}>
          <Typography variant="h5" align="center" sx={{color: "black", width: "75%", float: "left", padding: "0.5em"}}>
            Click on a color to style my portfolio! Welcome to your own custom UX experience born out of my indecisiveness for this color palettes.
            <br/>
            You've picked {colorPicked}.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <CompactPicker color={colorPicked} onChange={handleColorChange} />
        </Grid>
      </Grid>
      < br/>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects colorPicked={colorPicked}/>} />
          <Route path="/portfolio/blogs" element={<Blogs blogs={blogs} colorPicked={colorPicked} />} />
          <Route path="/portfolio/contact" element={<Contact colorPicked={colorPicked} />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
