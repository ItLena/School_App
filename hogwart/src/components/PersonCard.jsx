import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import axios from 'axios'
const PersonCard = () => {
    const { id } = useParams();
    let [person, setPerson] = useState({
        image: '',
        name: '',
        gender: '',
        house: ''
    });
    useEffect(() => {
        axios.get(`https://hp-api.onrender.com/api/character/${id}`)
            .then(res => {
                setPerson({
                    name: res.data[0].name,
                    gender: res.data[0].gender,
                    house: res.data[0].house,
                    image: res.data[0].image,
                    species: res.data[0].species,
                })
            })
    }, [id])

    return (
        <Card sx={{ p: 2, marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardMedia
                component="img"
                height="350px"
                sx={{ width: "70%", padding: "1rem", }}
                image={person.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {person.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Gender: {person.gender}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    House: {person.house}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Species: {person.species}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PersonCard