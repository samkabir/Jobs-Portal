import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bgimg from '../../images/Login/bg.png';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    let [loginData, setLoginData] = useState({});
    let navigate = useNavigate();;

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        // 
        
        fetch('https://tf-practical.herokuapp.com/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({loginData})
            })
            .then( response => response.json())
            .then(data => {
                if(data.user.email){
                    navigate("/login");
                }
            })
            .catch(error => console.log("Error detected: " + error));
        e.preventDefault();
    }
    

    return (
        <div>
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
                            <Box sx={{p:2}}>
                                <form onSubmit={handleLoginSubmit}>
                                    <Grid container spacing={2} sx={{pl:5}}>

                                        <Grid item xs={6}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Name" 
                                            name="full_name"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Phone Number"
                                            type="number" 
                                            name="phone_number"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Date of Birth" 
                                            name="birthDate"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DesktopDatePicker
                                                label="Date desktop"
                                                inputFormat="MM/dd/yyyy"
                                                value={value}
                                                onChange={handleChange}
                                                name="DateOfBirth"
                                                renderInput={(params) => <TextField {...params} />}
                                                />
                                            </LocalizationProvider>    */}
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Gender" 
                                            name="gender"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={gender}
                                                label="Gender"
                                                onChange={handleChange}
                                                >
                                                <MenuItem value={10}>Male</MenuItem>
                                                <MenuItem value={20}>Female</MenuItem>
                                            </Select> */}
                                        </Grid>

                                        <Grid item xs={12}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Your Email" 
                                            name="email"
                                            type="email"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                            sx={{width: '100%', m:2 }}
                                            id="standard-basic" 
                                            label="Password"
                                            type="password" 
                                            name="password"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        </Grid>

                                        <Grid item xs={6}>
                                            
                                        </Grid>
                                        
                                        <Grid item xs={12}>
                                            <Button type="submit" sx={{width: '35%', ml:5, backgroundColor:'#182f59', color:'white'}} > Register </Button>
                                        </Grid>
                                    </Grid>
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

export default SignUp;