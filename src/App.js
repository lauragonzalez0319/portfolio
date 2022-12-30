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
      <CompactPicker color={colorPicked} onChange={handleColorChange} style={{width: "100%"}}/>
      <Typography variant="h5" align="center" sx={{color: "white", backgroundColor: colorPicked, width: "75%", float: "left", opacity: 0.5, padding: "0.5em"}}>
        Click on a color to style my portfolio! Welcome to your own custom UX experience borne out of my indecisiveness for this color palettes.
        <br/>
        You've picked {colorPicked}.
      </Typography>
      < br/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects colorPicked={colorPicked}/>} />
          <Route path="/blogs" element={<Blogs blogs={blogs} colorPicked={colorPicked} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
