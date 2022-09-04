import React, { Component } from "react";
import Header from "../../common/header/Header";
import "../../screens/home/Home.css";
import {Grid,Box} from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import tileData from './tileData';


export class Home extends Component {
  render() {
    const { classes } = props;
    return (
        <>
      <div>
        <Header />
        <div className="upcoming_movies">
        <span >Upcoming Movies</span>
        </div>
        {/* <Grid container spacing={2}>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'red'}}>xs=8</Box>
  </Grid>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'blue'}}>xs=4</Box>
  </Grid>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'green'}}>xs=4</Box>
  </Grid>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'yellow'}}>xs=8</Box>
  </Grid>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'red'}}>xs=8</Box>
  </Grid>
  <Grid item xs={2}>
    <Box style={{backgroundColor:'blue'}}>xs=4</Box>
  </Grid>
</Grid> */}
<div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
      </div>
      </>
    );
  }
}

export default Home;
