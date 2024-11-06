
import { Typography, Paper} from '@mui/material';
import AccordionInfo from '../components/Accordion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Home = () => {
    return(
        <Paper sx={{p:2, marginTop: '3rem', opacity: 0.95}}>
            <Typography variant='h3' gutterBottom>
            Welcome to Hogwarts School of Witchcraft and Wizardry
            </Typography>
            <Typography variant="subtitle1" gutterBottom>Your Magical Journey Begins Here <AutoAwesomeIcon/></Typography>
           
            <AccordionInfo sx={{marginTop: '3rem'}}/>
        </Paper>
    )
}
export default Home