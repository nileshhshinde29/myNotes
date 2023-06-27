import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './secondNavbar.scss'



export default function Navbar() {
    return (
        <Box className='secondary-nav'>

            <span className='web-view'>
                <span>Sell</span>
                <span>Todays Deals</span>
                <span>Mobiles</span>
                <span>Mens Wear</span>
                <span>Women wear</span>
                <span>Kids</span>
                <span>About</span>
                <span>Contact</span>
            </span>
            <span className="mobile-view">
                <input type='select' />
                <span>About</span>
                <span>Contact</span>
            </span>


        </Box>
    );
}