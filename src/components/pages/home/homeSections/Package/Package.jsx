import { useContext } from "react";
import PackageCard from "../../../../common/PackageCard/PackageCard";
import { PackageContext } from "../../../../../context/PackageContext";
import { Button } from "@mui/material";
import { HashLink } from "react-router-hash-link";

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
        <Button variant="contained" disabled={yourPackage.length === 0} sx={{textTransform: 'unset', borderRadius: '10px', alignSelf: 'center', margin: '1rem'}}>
            <HashLink to={'/contact/-1#start'} style={{color: '#fff'}}>Get it!</HashLink>
        </Button>
      </section>
  )
}

export default Package