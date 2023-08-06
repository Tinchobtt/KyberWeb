import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const ServiceCard = ({service}) => {
  return (
    <div className="service-card shadow">
        <div className="service-card-info">
            <h4>{service.name}</h4>
            <p>{service.desc}</p>
        </div>
        <HashLink style={{color: '#fff'}} to={`/serviceDetail/${service.id}#start`}>
          <Button 
              variant="contained" 
              size="large"
          >Details
          </Button>
        </HashLink>
    </div>
  )
}

export default ServiceCard