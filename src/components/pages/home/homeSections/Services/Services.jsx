import { services } from "../../../../../lists/services"
import ServiceCard from "../../../../common/ServiceCard/ServiceCard"

const Services = () => {
  return (
    <section id="services" className="services shadow">
        <h3 className="section-title">Services</h3>
        <div className="services-container">
          {
            services.map( (serv) => {
              return <ServiceCard key={serv.id} service={serv}/>
            })
          }
        </div>
      </section>
  )
}

export default Services