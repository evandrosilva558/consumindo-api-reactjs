import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import { AppBar, Button, getFormLabelUtilityClasses, Toolbar, Tooltip, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const Lista = (() => {
    const [frutas, setFrutas] = useState([]);

    const [cart, setCart] = useState([]);

    const [page, setPage] = useState(PAGE_PRODUCTS);

    useEffect(() => {
      axios.get('/api/fruit/all').then(res=> {
        const frutas = res.data;
        setFrutas(frutas);
        
      });
    }, []);

    const addCart = (frutas) => {
      setCart([...cart, frutas]);
      console.log(frutas)
    }

      const removeCart = (frutaRemove) => {
      setCart(cart.filter(fruta => fruta !== frutaRemove));
      console.log(frutaRemove)
    }

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    }

    const renderCart = () => (
      <>
      <main style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}} >
    <AppBar position="fixed"   sx={{ flexGrow: 1, paddingRight: 10 }}>
        <Toolbar>
        <Button variant="outlined" size="small" color="info" startIcon={<ArrowBackIcon style={{ textDecoration: 'none', color: 'white' }}/>}><Link to="/#" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
            Cart
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
          Quantity in Cart =
            ( { cart.length} )
          </Typography>
          <Tooltip title="Return" arrow><Button variant="outlined" size="small" color="info" startIcon={<KeyboardReturnIcon style={{ textDecoration: 'none', color: 'white' }}/>} onClick={() => navigateTo(PAGE_PRODUCTS)}></Button></Tooltip>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center', maxWidth: 550, borderRadius: 3, margin: 15}}>
          <Table sx={{ minWidth: 350 }} size="medium" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: '#81C784'}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((frutas) => (
                <TableRow
                  key={frutas.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {frutas.name}
                  </TableCell>
                  <TableCell>
                <Tooltip title="Add" arrow><Button style={{margin: 5}} variant="contained" size='mediun' startIcon={<AddShoppingCartIcon />} onClick={() => addCart(frutas)}></Button></Tooltip>
                <Tooltip title="Remove" arrow><Button style={{margin: 5}} variant="outlined" size='mediun' startIcon={<RemoveShoppingCartIcon />} onClick={() => removeCart(frutas)}></Button></Tooltip>
                <Tooltip title="more information" arrow><Button style={{margin: 5}} variant="outlined" size="mediun" color="info" startIcon={<InfoIcon style={{ textDecoration: 'none' }}/>}><Link to="/routedetails" style={{ textDecoration: 'none', color: '#29B6F6' }}>Info</Link></Button></Tooltip>
                </TableCell>
                </TableRow>
              ))};
            </TableBody>
          </Table>
        </TableContainer>
    </main>
      </>
    ) 

    const renderProduct = () => (
      <>
    <main style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor: '#CFD8DC'}} >
    <AppBar position="fixed"   sx={{ flexGrow: 1, paddingRight: 10 }}>
        <Toolbar>
        <Button variant="outlined" size="small" color="info" startIcon={<ArrowBackIcon style={{ textDecoration: 'none', color: 'white' }}/>}>
            <Link to="/routehome" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></Button>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
            Fruits
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, paddingLeft: 10 }}>
            Quantity in Cart =
            ( {cart.length} )
          </Typography>
          <Button variant="contained" size="small" color="success" startIcon={<ShoppingCartCheckoutIcon />} onClick={() => navigateTo(PAGE_CART)}>Cart</Button>
        </Toolbar>
      </AppBar>
          <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center', maxWidth: 550, borderRadius: 3, margin: 15}}>
          <Table sx={{ minWidth: 350 }} size="medium" aria-label="a dense table">
            <TableHead sx={{ backgroundColor: '#81C784'}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
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
                  <TableCell>
                <Tooltip title="Add" arrow><Button style={{margin: 5}} variant="contained" size='mediun' startIcon={<AddShoppingCartIcon />} onClick={() => addCart(frutas)}></Button></Tooltip>
                <Tooltip title="Remove" arrow><Button style={{margin: 5}} variant="outlined" size='mediun' startIcon={<RemoveShoppingCartIcon />} onClick={() => removeCart(frutas)}></Button></Tooltip>
                <Tooltip title="more information" arrow><Button style={{margin: 5}} variant="outlined" size="mediun" color="info" startIcon={<InfoIcon style={{ textDecoration: 'none' }}/>}><Link to="/routedetails" style={{ textDecoration: 'none', color: '#29B6F6' }}>Info</Link></Button></Tooltip>
                </TableCell>
                </TableRow>
              ))};
            </TableBody>
          </Table>
        </TableContainer>
    </main>
      </>
  )
      return (
        <div>
        <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go-Cart</button>
        </header>
        {page === PAGE_PRODUCTS && renderProduct()}
        {page === PAGE_CART && renderCart()}
        </div>
      );
      
    
      
});
export default Lista;