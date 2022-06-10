import { makeStyles,Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';
//simport banner2 from "./banner2

const useStyles= makeStyles(()=>({
  banner:{
    backgroundImage:"url(./banner2.jpg)",
  },
  bannerContent:{
    height:400,
    display:"flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",
  },
  tagline:{
    display:"flex",
    height:"40%",
    flexDirection:"column",
    textAlign:"center",
    justifyContent:"center",
  }
}));
const Banner = () => {
  const classes =useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
          variant="h2"
          style={{
            fontWeight:"bold",
            marginBottom:15,
            fontFamily:"Montserrat",
          }}
          >
            Crypto tracker
          </Typography>
          <Typography
          variant="subtitle2"
          style={{
            color:"darkgrey",
            textTransform:"capitalize",
            fontFamily:"Montserrat",
          }}
          >
            Get all the Info Regarding your Favourite Crypto Currency
          </Typography>
          <Carousel/>
        </div>
      </Container>
    </div>
  )
}

export default Banner