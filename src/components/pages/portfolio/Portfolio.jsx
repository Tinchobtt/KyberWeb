import { MenuItem, Select, ThemeProvider, createTheme } from "@mui/material"
import { useState } from "react";
import { services } from "../../../../services";
import { HashLink } from "react-router-hash-link";
import imgFMC from '../../../assets/FMC.png'

const Portfolio = () => {
  const [service, setService] = useState('');

  const handleChange = (event) => {
    setService(event.target.value);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <main id="portfolio">
      <section>
        <h3 className="section-title">Portfolio</h3>
        <ThemeProvider theme={darkTheme}>
          <Select
            value={service}
            onChange={handleChange}
            displayEmpty
            sx={{margin: '1rem 0'}}
          >
            <MenuItem value="">All</MenuItem>
            {
              services.map( serv => {
                return <MenuItem key={serv.id} value={serv.id}>{serv.name}</MenuItem>
              })
            }
          </Select>
        </ThemeProvider>
        <div className="proyects-container">
          <div className="proyect">
            <HashLink to={''}>
              <img src={imgFMC} alt="" />
            </HashLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio