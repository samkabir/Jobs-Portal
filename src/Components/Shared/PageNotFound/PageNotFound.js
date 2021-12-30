import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../images/PageNotFound/pagenotfound.png';
import Button from '@mui/material/Button';

const PageNotFound = () => {
    return (
        <div>
                <div>
                    <img src={notfound} alt="Page Not Found"  height="500px"/>
                </div>
                <div>
                    <Link style={{textDecoration:'none', color:'black'}} to="/" ><Button variant="contained">Home</Button> </Link>
                </div>
        </div>
    );
};

export default PageNotFound;