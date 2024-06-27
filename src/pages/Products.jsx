import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from "@mui/material/Box";

import ProductList from '../pages/products/ProductList';
import "../Dash.css";


const Products = () => {
  return (
    <>
     <div className='bgcolor'>
        <Navbar/>
        <Box height={30} />
        <Box sx={{display:"flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p:3 }}>
                <ProductList />
            </Box>
        </Box>
      </div>
    </>
   
  )
}

export default Products
