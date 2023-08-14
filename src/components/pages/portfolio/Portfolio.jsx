import { MenuItem, Select, ThemeProvider, createTheme } from "@mui/material"
import { useState } from "react";
import { services } from "../../../lists/services";
import { proyects } from "../../../lists/proyects";
import ProyectCard from "../../common/ProyectCard/ProyectCard";

const Portfolio = () => {
  const [service, setService] = useState('All');
  const [proyectList, setProyectList] = useState(proyects);
  
  const handleChange = (event) => {
    setService(event.target.value);
    setProyectList(filterProyects(event.target.value))
  };

  const filterProyects = (category) =>{
    if(category === 'All'){
      return proyects
    }
    return proyects.filter( proy => proy.category.includes(category))
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <main id="portfolio">
      <section>
        <h3 className="section-title">Portfolio</h3>
        <br />
        <ThemeProvider theme={darkTheme}>
          <Select
            value={service}
            onChange={handleChange}
            displayEmpty
            sx={{margin: '1rem 0'}}
          >
            <MenuItem value="All">All</MenuItem>
            {
              services.map( serv => {
                return <MenuItem key={serv.id} value={serv.name}>{serv.name}</MenuItem>
              })
            }
          </Select>
        </ThemeProvider>
        <div className="proyects-container">
          {
            proyectList.length > 0 ? (
              proyectList.map( proy => {
                return  (
                  <ProyectCard key={proy.id} proyect={proy} />
                )
              })
            ) : (
              <p className={"notice shadow"}>Oops! This category is empty. 😅<br /> Be the first to let us fill it with your amazing project!</p>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Portfolio