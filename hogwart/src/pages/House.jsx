import {  Container, Typography } from '@mui/material';

const HouseById = () =>{
   
    return(
        <Container sx={{ p: 4, width: '100%', overflow: 'hidden', marginTop: '5rem' }}>
        <Typography variant='h4'>House by Id</Typography>
        {console.log("House by Id Page")}
        </Container>
    )
}

export default HouseById