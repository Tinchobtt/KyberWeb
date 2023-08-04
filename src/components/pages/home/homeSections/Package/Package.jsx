import { useContext } from "react";
import PackageCard from "../../../../common/PackageCard/PackageCard";
import { PackageContext } from "../../../../../context/PackageContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Package = () => {
    const {packages, yourPackage, packageToYours, yoursToPackage} = useContext(PackageContext)

  return (
    <section id="package" className="packageManager">
        <h3 className="section-title">Build Your Package</h3>
        <div className="package-system">
            <div className="packages">
                <h4 className="subtitle">Services</h4>
            {
                packages.map( (item) => {
                    return <PackageCard key={item.id} item={item} plus={true} func={packageToYours}/>
                })
            }
            </div>
            <div className="yourPackage">
                <h4 className="subtitle">Your Package</h4>
            {
                yourPackage.map( (item, i) => {
                    return <PackageCard key={item.id} item={item} plus={false} func={yoursToPackage}/>
                })
            }
            </div>
        </div>
        <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '10px', alignSelf: 'center', margin: '1rem'}}>
            <Link to={'/contact/-1'} style={{color: '#fff'}}>Get it!</Link>
        </Button>
      </section>
  )
}

export default Package