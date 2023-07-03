import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './secondNavbar.scss'
import { categoryService } from '../../Service/categories.service'



export default function Navbar(props) {
    const { catagories, setSelectedCategory, selectedCategory } = props





    return (
        <Box className='secondary-nav'>
            <span className='web-view'>
                {
                    catagories?.map((item, index) =>
                        <span className={`btn-secondary ${item._id == selectedCategory ? "active" : ''}`} onClick={() => setSelectedCategory(item._id)} key={index}>{item.categoryName}</span>
                    )
                }
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