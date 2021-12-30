import * as React from 'react';
import { styled, useTheme  } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Outlet } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 680,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  flexGrow: 1
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link sx={{textDecoration:'none', color:'white'}} to={`/`} >Techforing </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
          <List>
            <ListItem button >
              <ListItemIcon>
                <Link to={`/dashboard/jobs`} > <HomeIcon /> </Link>
              </ListItemIcon>
            </ListItem> 
            
            <ListItem button >
              <ListItemIcon>
              

              <Button onClick={handleOpen}><AddBoxIcon /></Button>
                <Modal hideBackdrop open={open} sx={{width:'100%'}} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                  <Box sx={style}>
                      <Grid container spacing={2}>
                          {/* Job Title */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Title
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job Shift */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Shift
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job Department */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Department
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job Level */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Level
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job Vacancy */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Vacancy
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job salary */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Salary
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Filter Question */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Filter Question
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                          {/* Job Description */}
                          <Grid item xs={4}>
                              <Typography variant="subtitle1">
                                  Job Description
                              </Typography>
                          </Grid>
                          <Grid item xs={8}>
                              <TextField id="outlined-basic" variant="outlined" />
                          </Grid>
                      </Grid>
                      <Box sx={{pt:5}}>
                          <Button onClick={handleClose} sx={{mx:1}} variant="contained">Close modal</Button>
                          <Button onClick={handleClose} sx={{mx:1}} variant="contained">Save</Button>
                          <Button onClick={handleClose} sx={{mx:1}} variant="contained">Create Job</Button>
                      </Box>
                  </Box>
          </Modal>


              </ListItemIcon>
            </ListItem> 
          </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
          <Outlet />
        
      </Box>
    </Box>
  );
}
