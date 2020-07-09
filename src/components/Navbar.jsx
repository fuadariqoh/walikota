import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


const useStyles=makeStyles({
    container:{
        display:'flex',
        justifyContent:'space-between'
    },
    leftMenu:{

    },
    rightMenu:{
        display:'flex',
        justifyContent:'space-around',
        width:'40vh'
    
    }
})


const Navbar =()=>{
    const classes=useStyles()

    return(
        <div className={classes.container}>
            <div className={classes.leftMenu}>LOGO</div>
            <div className={classes.rightMenu}>
                <div>Tentang Kami</div>
                <div>Visi/Misi</div>
                <div>Login</div>


            </div>
        </div>
    )
}

export default Navbar