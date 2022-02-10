import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getdata} from '../Redux/Features/Products/ProductSlice'
function Singledata() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);
    

    useEffect(() => {
        dispatch(getdata(id))  
    },[])
  
  return (
      <Container>
          <Typography variant='h2'>product name: { product.name}</Typography>
          <Typography variant='h2'>product price: { product.price}tk</Typography>
     </Container>
  )
}

export default Singledata