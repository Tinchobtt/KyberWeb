import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const ServiceCard = ({service}) => {
  return (
    <div className="service-card shadow">
        <div className="service-card-info">
            <h4>{service.name}</h4>
            <p>{service.desc}</p>
        </div>
        <Button 
            variant="contained" 
            size="large"
            sx={{backgroundColor: '#006ED6', 
                textTransform: 'inherit', 
                fontWeight: '400',
                display: 'inline-block'}}
        ><Link style={{color: '#fff'}}  to={`/serviceDetail/${service.id}`}>Details</Link></Button>
    </div>
  )
}

export default ServiceCard