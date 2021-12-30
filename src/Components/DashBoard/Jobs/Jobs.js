import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  fetch('https://tf-practical.herokuapp.com/api/job_post/', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "detail": "yJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…jY2fQ.APCTATWX-NPu-PryDELqcNeqk5yR072uMbEKzFCy8uI",
                "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90e…o2Nn0.s5rsI4WOc4tK1gWDR5-qJGvHOOEb-kxqhhdnW_jaNos",
                "email": "samkabir26@gmail.com",
                "password": "FahimKabir123456789"
            })
        })
        .then( response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error detected: " + error));
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
    
const Jobs = () => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>POST NAME</TableCell>
                    <TableCell align="right">TOTAL APPLICANTS</TableCell>
                    <TableCell align="right">TYPE</TableCell>
                    <TableCell align="right">POST DATE</TableCell>
                    <TableCell align="right">EXPIRE DATE</TableCell>
                    <TableCell align="right">SALARY</TableCell>
                    <TableCell align="right">STATUS</TableCell>
                    <TableCell align="right">ACTION</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
    };

export default Jobs;