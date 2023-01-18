import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typewriter from 'typewriter-effect';

function About() {
  const itemData = [
    {
      img: require('./assets/about-1.jpeg'),
      rows: 2,
      cols: 2,
    },
    {
      img: require('./assets/about-9.jpeg')
    },
    {
      img: require('./assets/about-4.jpeg')
    },
    {
      img: require('./assets/about-5.jpeg'),
      cols: 2,
    },
    {
      img: require('./assets/about-6.jpeg'),
      title: 'Hats',
      cols: 2,
    },
    {
      img: require('./assets/about-7.jpeg'),
      rows: 2,
      cols: 2,
    },
    {
      img: require('./assets/about-8.jpeg')
    },
    {
      img: require('./assets/about-3.jpeg')
    },
    {
      img: require('./assets/about-10.jpeg'),
      rows: 2,
      cols: 2,
    },
    {
      img: require('./assets/about-11.jpeg')
    },
    {
      img: require('./assets/about-19.JPG')
    },
    {
      img: require('./assets/about-13.jpeg'),
      cols: 2,
    },
    {
      img: require('./assets/about-14.jpeg'),
      rows: 2,
      cols: 2,
    },
    { 
      img: require('./assets/about-15.jpg') 
    },
    { 
      img: require('./assets/about-16.jpeg')
    },
    {
      img: require('./assets/about-17.jpeg'),
      cols: 2,
    },
    {
      img: require('./assets/about-18.JPG'),
      cols: 2,
    },
    {
      img: require('./assets/about-12.jpeg'),
      cols: 2
    }
  ];

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const interests = ["hiking", "food", "concerts", "national parks", "roadtrips", "the beach", "dogs"]


  return (
    <div>
      <br/>
        <div id="typewriter-about">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("I love coding, but I also love traveling.")
                .pauseFor(2500)
                .deleteChars(10)
                .typeString(interests[0]).pauseFor(2500).deleteChars(interests[0].length).pauseFor(2500)
                .typeString(interests[1]).pauseFor(2500).deleteChars(interests[1].length).pauseFor(2500)
                .typeString(interests[2]).pauseFor(2500).deleteChars(interests[2].length).pauseFor(2500)
                .typeString(interests[3]).pauseFor(2500).deleteChars(interests[3].length).pauseFor(2500)
                .typeString(interests[4]).pauseFor(2500).deleteChars(interests[4].length).pauseFor(2500)
                .typeString(interests[5]).pauseFor(2500).deleteChars(interests[5].length).pauseFor(2500)
                .typeString(interests[6]).pauseFor(2500).deleteChars(interests[6].length).pauseFor(3000)
                .start();
            }}
            options={{ loop: true }}
          />
        </div>
      <br/>
      <Box id="center" sx={{ width: "90%", height: "50%", overflowY: 'scroll' }}>
        <ImageList
          variant="quilted"
          cols={12}
          rowHeight={200}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default About