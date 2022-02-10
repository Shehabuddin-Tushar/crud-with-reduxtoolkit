import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Dataview() {

    const products = useSelector(state => state.product.products);
    console.log(products)
    return (
        <Container>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>serial</TableCell>
                        <TableCell align="right">product name</TableCell>
                        <TableCell align="right">price</TableCell>
                        <TableCell align="center">action</TableCell>
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            products.map(product => {
                                return (
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            1
                                        </TableCell>
                                        <TableCell align="right">{ product.name }</TableCell>
                                        <TableCell align="right">{product.price} tk</TableCell>
                                        <TableCell align="center">
                                            <Button><Link to={`product/${product.id}`}>View</Link></Button>
                                            <Button>Add</Button>
                                            <Button>Delete</Button>
                                            <Button>Edit</Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            })
                   }
                        
                   
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
}