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
                <div className="package-container">
                {
                    packages.map( (item) => {
                        return <PackageCard key={item.id} item={item} plus={true} func={packageToYours}/>
                    })
                }
                </div>
            </div>
            <div className="packages">
                <h4 className="subtitle">Your Package</h4>
                <div className="package-container">
                {
                    yourPackage.map( (item, i) => {
                        return <PackageCard key={item.id} item={item} plus={false} func={yoursToPackage}/>
                    })
                }
                </div>
            </div>
        </div>
        <div className="button-container" style={{display: 'flex', justifyContent: 'center'}}>
            <Button variant="contained" disabled={yourPackage.length === 0} sx={{textTransform: 'unset', borderRadius: '10px', alignSelf: 'center', padding: 0}}>
                <HashLink to={'/contact/-1#start'} style={{color: '#fff', width: '100%', height: '100%', padding: '1rem 2rem'}}>Get it!</HashLink>
            </Button>
        </div>
      </section>
  )
}

export default Package