import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-position">
        <div className="hero-intro">
          <h2 className="title">Your fingerprint<br />in the cyberspace</h2>
          <h1 className="sub-title">Web development and design agency</h1>
        </div>
        <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '10px', alignSelf: 'center', padding: 0}}>
          <HashLink to={'/contact/0#start'} style={{color: '#fff', width: '100%', height: '100%', padding: '1rem 2rem', fontWeight: 500, fontSize: '20px'}}>Contact us</HashLink>
        </Button>
      </div>
    </section>
  )
}

export default Hero