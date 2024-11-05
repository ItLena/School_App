import { useEffect, useState } from "react"

import axios from 'axios'
import {  TableContainer, Avatar,  Typography, TableRow,Paper, TableHead, Table, TableCell, TableBody } from '@mui/material';

const Staffs = () =>{

    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{       
        axios.get("https://hp-api.onrender.com/api/characters/staff") 
        .then(res =>{
            console.log("Staffs:", res)
            setTeachers(res.data)
        })
    }, [])
    return ( 
   
    <Paper sx={{ p: 4, width: '100%', overflow: 'hidden', marginTop: '5rem' }}>
    <Typography gutterBottom variant='h4'>Hogwarts Staffs</Typography>
    <TableContainer component={Paper}>
        
    <Table sx={{ width: '100%' }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Image</TableCell>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Date of birth</TableCell>
        <TableCell align="center">House</TableCell>
        <TableCell align="center">Patronus</TableCell>       
      </TableRow>
    </TableHead>
    <TableBody>
      {teachers.map((row) => (
        <TableRow
          key={row.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
          <Avatar sx={{ width: 50, height: 70 }} 
        
        src={`${row.image}?w=248&fit=crop&auto=format`}
      />
          </TableCell>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="left">{row.dateOfBirth}</TableCell>
          <TableCell align="left">{row.house}</TableCell>
          <TableCell align="left">{row.patronus}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
    </TableContainer>
    </Paper>
    )
}

export default Staffs