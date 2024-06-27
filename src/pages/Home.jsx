import React from 'react';
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordiasDash from '../components/AccordioDash';


export const Home = () => {
    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} width={1900} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row" >
                                    <Card sx={{ minWidth: 49 + "%", height: 175 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                500
                                            </Typography>
                                            <Typography
                                                gutterBottom variant="body2"
                                                component="div"
                                                sx={{ color: "#F2F2F2" }}>
                                                Total Orders
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 175 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconstyle'>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                                                9000
                                            </Typography>
                                            <Typography
                                                gutterBottom variant="body2"
                                                component="div"
                                                sx={{ color: "#F2F2F2" }}>
                                                Total earnings
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} >
                                    <Card sx={{ maxWidth: 550 }} className='gradientlight'>
                                        <Stack spacing={2} direction="row" >
                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>350 k</span>
                                                <br />
                                                <span className='pricesubtitle'> Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 550 }} className='gradientlight'>
                                        <Stack spacing={2} direction="row" >
                                            <div className='iconstyleblack'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddingall'>
                                                <span className='pricetitle'>350 k</span>
                                                <br />
                                                <span className='pricesubtitle'> Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>



                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                    <div className='paddingall'>
                                                <span className='pricetitle'>Popular Psto</span>
                                                
                                            </div>
                                        <AccordiasDash/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>


        </>
    );
}
