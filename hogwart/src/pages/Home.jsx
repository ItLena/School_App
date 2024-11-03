import { useEffect, useState } from "react"
import HouseCard from "../components/HouseCard"
import axios from "axios";
import { Container } from '@mui/material';

const Home = () =>{
    const [houses, setHouses] = useState([]);
    
    useEffect(()=>{       
        axios.get("../../public/data/houses.json") 
        .then(res =>{
            console.log("Houses:", res)
            setHouses(res.data)
        })
    }, [])
    return(
        <>
        <h1>Hello Hogwart</h1>
        <Container maxWidth="sm"
         sx={{display: 'flex', flexWrap:"wrap", gap:"2rem" }}>
            {
                houses && houses.map((item) =>(
                   <HouseCard
                   key={item.id}
                   house={item}
                   /> 
                )
            )
            }
            
        </Container>
       
        </>
    )
}
export default Home