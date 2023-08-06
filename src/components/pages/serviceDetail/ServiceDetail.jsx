import { useParams } from "react-router-dom"
import { services } from "../../../../services"
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const ServiceDetail = () => {
  const {id} = useParams()
  let service = services.find( serv => serv.id === +id);

  return (
    <main id="serviceDetail" className="service-detail">
      <section className="portada shadow">
        <h2>{service.name}</h2>
        <img src={service.img} alt={service.name} />
      </section>
      <section className="service-content">
        <div className="label">
          <h3><span>What is {service.name}?</span></h3>
        </div>
        <div className="content">
          <p>
            El desarrollo web es el proceso de crear y construir sitios web. Consiste en diseñar y desarrollar páginas web funcionales y atractivas que sean accesibles a través
            de Internet. Durante el desarrollo web, se utilizan diferentes herramientas y técnicas para construir la estructura, el diseño y las funcionalidades del sitio. 
            Esto incluye la organización del contenido, la creación de enlaces, la implementación de elementos interactivos y la adaptación para su visualización en diferentes 
            dispositivos. El objetivo del desarrollo web es crear sitios web que sean fáciles de usar, que ofrezcan una experiencia agradable para los visitantes y que cumplan con 
            los requisitos y objetivos del cliente. En resumen, el desarrollo web se encarga de transformar ideas y conceptos en sitios web completos y funcionales que puedan ser 
            visitados y utilizados en línea.
          </p>
        </div>
        <div className="label">
          <h3>Steps of the process</h3>
        </div>
        <div className="content">
          <ol>
            <li>Reunión inicial y análisis: Al comenzar el proceso de desarrollo web, se llevará a cabo una reunión inicial con el cliente para comprender en detalle su proyecto y objetivos. Para facilitar este proceso, se proporcionará al cliente un formulario con preguntas técnicas específicas. Este formulario ayudará a recopilar información relevante, como las funcionalidades deseadas, el tipo de contenido, el alcance del proyecto y los plazos de entrega. Esta información será utilizada para elaborar un presupuesto preciso y detallado que se ajuste a las necesidades del cliente.</li>
            <li>Planificación y diseño: Una vez que se haya recopilado la información necesaria, se procederá a la fase de planificación y diseño del sitio web. Se definirá la estructura del sitio, la arquitectura de la información y se creará un diseño visual acorde con la identidad y objetivos del cliente.</li>
            <li>Desarrollo del contenido: En esta etapa, se trabajará en la creación y organización del contenido del sitio web. Se desarrollarán los textos, imágenes, videos y otros elementos multimedia que se integrarán en las diferentes secciones del sitio.</li>
            <li>Desarrollo y codificación: En esta etapa, el equipo de desarrollo web trabajará en la implementación del proyecto. Se transformará el diseño en código funcional, asegurando su adaptabilidad a diferentes navegadores y dispositivos. Se utilizarán las mejores prácticas y técnicas de desarrollo web para garantizar un sitio web de calidad y una experiencia de usuario óptima.</li>
            <li>Pruebas y revisión: Una vez que se haya completado el desarrollo, se realizarán pruebas exhaustivas para verificar que el sitio web funcione correctamente en términos de diseño y funcionalidad. Se corregirán cualquier error identificado y se realizarán los ajustes necesarios para asegurar una experiencia de usuario óptima.</li>
            <li>Lanzamiento y puesta en marcha: Con el sitio web probado y aprobado, se procederá a su lanzamiento oficial. Se realizará la configuración del hosting y el dominio, y se publicará el sitio para que esté disponible en Internet.</li>
            <li>Mantenimiento y actualizaciones: Después del lanzamiento, se ofrecerá un servicio de mantenimiento continuo para asegurar el correcto funcionamiento del sitio web. Además, se realizarán actualizaciones según sea necesario para agregar nuevas funcionalidades o mejorar la experiencia del usuario.</li>
          </ol>
        </div>
        <Button variant="contained" sx={{alignSelf: 'center'}}>
          <HashLink to={`/contact/${service.id}#start`} style={{color: '#fff'}}>I want this service!</HashLink>
        </Button>
      </section>
    </main>
  )
}

export default ServiceDetail