import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import bgimg from '../../images/Login/bg.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    let navigate = useNavigate();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        fetch('https://tf-practical.herokuapp.com/api/login/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "email": loginData.email,
                "password": loginData.password
            })
        })
        .then( response => response.json())
        .then(data => {
            if(data.user.email){
                navigate("/dashboard");
            }
        })
        .catch(error => console.log("Error detected: " + error));

        e.preventDefault();
    }
    return (
        <div id="loginbg">
            <Grid sx={{ p : 8 }} container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', '& > :not(style)': { m: 1, width: 500, height: 500 }, pt : 5 }} >
                        <Paper elevation={3}>
                            <Grid container spacing={0} columns={16}>
                                <Grid item xs={8} sx={{backgroundColor:'#182f59', '&:hover': { backgroundColor: 'black' },}}>
                                    <NavLink style={{textDecoration:'none' }} to="/login">
                                        <Button sx={{ color:'white', '&:hover': { color: 'green' },}}>Login</Button>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={8} sx={{backgroundColor:'#182f59', color:'white', '&:hover': { backgroundColor: 'black' },}}>
                                    <NavLink style={{textDecoration:'none'}} to="/signup">
                                        <Button sx={{ color:'white','&:hover': { color: 'green' },}}>SignUp</Button>
                                    </NavLink>
                                </Grid>
                            </Grid>
                            <Box sx={{pt:5}} >
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField 
                                    sx={{width: '75%', m:2 }}
                                    id="standard-basic" 
                                    label="Your Email" 
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                    <TextField 
                                    sx={{width: '75%', m:2 }}
                                    type="password"
                                    id="standard-basic" 
                                    label="Your Password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                    <Button type="submit" sx={{width: '20%', m:2, backgroundColor:'#182f59', color:'white' }} variant="contained"> SIGN IN </Button>
                                </form>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <img src={bgimg} alt="loginbackgroundimage" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Login;