import { Card, CardMedia, CardContent, Typography, Link } from "@mui/material"
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
       <Link href="/house/:id"><Typography variant="h5" component="div">{house.title}</Typography></Link> 
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{house.description}</Typography>
      </CardContent>
    </Card>
  )
}
HouseCard.propTypes = {
  house: PropTypes.object,
}
export default HouseCard
