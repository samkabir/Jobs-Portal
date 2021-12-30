import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to TechForing Jobs Portal</h2>
            <Link style={{textDecoration:'none', color:'black'}} to="/login"><Button variant="contained">Job Portal</Button></Link>
        </div>
    );
};

export default Home;