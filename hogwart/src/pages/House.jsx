import { useEffect, useState } from "react"
import HouseCard from "../components/HouseCard"
import axios from "axios";
import { Box, Typography, Paper } from '@mui/material';

const Houses = () =>{
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get("../../public/data/houses.json")
            .then(res => {                
                setHouses(res.data)
            })
    }, [])
    return (
        <Paper sx={{ p: 2, marginTop: '5rem', opacity: 0.95 }}>
            <Typography  gutterBottom variant='h4'>Hogwarts Houses</Typography>
            <Box maxWidth="sl" sx={{ display: 'flex', flexWrap: "wrap", gap: "2rem", justifyContent: 'center' }}>
                {
                    houses && houses.map((item) => (
                        <HouseCard
                            key={item.id}
                            house={item}
                        />
                    )) 
                }
            </Box>
        </Paper>
    )
}

export default Houses