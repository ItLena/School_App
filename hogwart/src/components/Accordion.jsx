import { Accordion, List, ListItem, AccordionActions, AccordionSummary, AccordionDetails, Button, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const AccordionInfo = () => {
  return (
    <Container>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Mission:
        </AccordionSummary>
        <AccordionDetails>
          To educate young witches and wizards in the magical arts and prepare them to become responsible members of the wizarding world.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Vision:
        </AccordionSummary>
        <AccordionDetails>
          To be the leading institution of magical learning, fostering creativity, innovation, and ethical wizardry.
        </AccordionDetails>
      </Accordion>
      <Typography>How to Become a Wizarding World Student</Typography>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Requirements:
        </AccordionSummary>
        <AccordionDetails>
          <List

            aria-label="contacts"
          >
            <ListItem disablePadding><Typography variant="overline" sx={{ paddingRight: '10px' }}>Age:</Typography> Turn 11 before September 1st.</ListItem>
            <ListItem disablePadding><Typography variant="overline" sx={{ paddingRight: '2px' }}>Magical Abilities:</Typography>  A natural inclination towards magic, preferably with a few accidental spell castings under your belt.</ListItem>
            <ListItem disablePadding><Typography variant="overline" sx={{ paddingRight: '2px' }}>A Hogwarts Letter:</Typography> This mystical invitation will arrive by owl post on your 11th birthday.</ListItem>
          </List>
        </AccordionDetails>
        <AccordionActions>
          <Button>Contact school</Button>
        </AccordionActions>
      </Accordion>
    </Container>
  )
}
export default AccordionInfo