import { Card, CardMedia, CardContent, Typography, CardActions, Button,Link } from "@mui/material"
import PropTypes from 'prop-types'

const HouseCard = ({ house }) => {
  return (
    <Card sx={{ width: "45%", opacity: "0.9" }}>
      <CardMedia
        component="img"
        height="250px"
        sx={{ width: "100%", padding: "1rem", }}
        image={house.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">{house.title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{house.description}</Typography>
      </CardContent>
      <CardActions>
      <Link href="/"><Button size="small">Learn More</Button></Link>
    </CardActions>

    </Card>
  )
}
HouseCard.PropTypes = {
  house: PropTypes.object,

}
export default HouseCard
