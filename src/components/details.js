import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Details = (() => {
    const [frutas, setFrutas] = useState([]);

    useEffect(() => {
      axios.get('/api/fruit/all').then(res=> {
        const frutas = res.data;
        setFrutas(frutas);
        
      });
    }, []);

     return (
         <>
        <main style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#CFD8DC'}}>
        <AppBar position="fixed"   sx={{ flexGrow: 1, paddingRight: 10 }}>
        <Toolbar>
        <Button variant="outlined" size="small" color="info" startIcon={<ArrowBackIcon style={{ textDecoration: 'none', color: 'white' }}/>}>
            <Link to="/routehome" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
            Fruit Details
          </Typography>
          <Button variant="outlined" size="small" color="info" startIcon={<ArrowBackIcon style={{ textDecoration: 'none', color: 'white' }}/>}><Link to="/routefruits" style={{ textDecoration: 'none', color: 'white' }}>Return</Link></Button>
        </Toolbar>
      </AppBar>
          <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center', maxWidth: 1050, borderRadius: 3, margin: 15}}>
          <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: '#81C784'}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Family</TableCell>
                <TableCell>Genus</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Carbs&nbsp;(g)</TableCell>
                <TableCell>Protein&nbsp;(g)</TableCell>
                <TableCell>Fat&nbsp;(g)</TableCell>
                <TableCell>Calories&nbsp;(g)</TableCell>
                <TableCell>Sugar&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {frutas.map((frutas) => (
                <TableRow
                  key={frutas.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {frutas.name}
                  </TableCell>
                  <TableCell>{frutas.family}</TableCell>
                  <TableCell>{frutas.genus}</TableCell>
                  <TableCell>{frutas.order}</TableCell>
                  <TableCell>{frutas.nutritions.carbohydrates}</TableCell>
                  <TableCell>{frutas.nutritions.protein}</TableCell>
                  <TableCell>{frutas.nutritions.fat}</TableCell>
                  <TableCell>{frutas.nutritions.calories}</TableCell>
                  <TableCell>{frutas.nutritions.sugar}</TableCell>
                </TableRow>
              ))};
            </TableBody>
          </Table>
        </TableContainer>
        </main>
    </>
    );
      
});
export default Details;