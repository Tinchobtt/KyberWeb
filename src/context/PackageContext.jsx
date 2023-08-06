import { createContext, useState } from 'react'
import { services } from '../../services';

export const PackageContext = createContext()

const PackageContextProvider = ({children}) => {
    const [packages, setPackages] = useState(services)
    const [yourPackage, setYourPackage] = useState([]);

    const packageToYours = (item)=>{
        let equal = yourPackage.some( serv => serv === item);
        !equal && setYourPackage([...yourPackage, item])
    }
    const yoursToPackage = (item)=>{
        let newPackage = yourPackage.filter( serv => serv !== item)
        setYourPackage(newPackage)
    }
    let data = {
        packages,
        setYourPackage,
        yourPackage,
        packageToYours,
        yoursToPackage
    }
    
    return (
    <PackageContext.Provider value={data}>
        {children}
    </PackageContext.Provider>
    )
}

export default PackageContextProvider