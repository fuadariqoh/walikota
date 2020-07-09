import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Navbar from './components/Navbar'


const useStyles=makeStyles({
  fontTitle:{
    fontSize:30,
    color:'red',
  }
})


function App() {
  const classes = useStyles()
  return (
    <div>
      <Navbar/>
        <h1 className={classes.fontTitle}>INI HOME</h1>
          <Button color='primary' variant='outlined'  style={{fontSize:200}} fullWidth>TES</Button>
    </div>
  );
}

export default App;
