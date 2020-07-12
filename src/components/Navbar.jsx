import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/core/MenuItem';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuClicked:{
      backgroundColor:'black',
      position:'absolute',
      color:'orange',
      zIndex:5,
    //   display:'block',
    //   display:'none',
    //   visibility:'hidden',
    height:'100vh',
    width:'100vw',
    // transition:transform
    
  }
}));

export default function ButtonAppBar() {
    const [clickMenu,onClickMenu]=useState(false)

    // useEffect(()=>{
    //     console.log(clickMenu)
    // },[clickMenu])

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>onClickMenu(!clickMenu)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Danny Pomanto
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {clickMenu? 
    <div className={classes.menuClicked}>
        Muncul
        </div>  :null
    }
    </div>
  );
}