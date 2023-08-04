import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-intro">
        <h2 className="title">Your fingerprint in the cyberspace</h2>
        <h1 className="sub-title">Web development and design agency</h1>
      </div>
      <Button variant="contained" sx={{backgroundColor: '#006ED6', textTransform: 'inherit', fontWeight: '400'}}>
        <Link to={'/contact/0'}>Contact us</Link>
      </Button>
    </section>
  )
}

export default Hero