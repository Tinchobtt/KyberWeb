import { Button } from "@mui/material"

 const PackageCard = ({item, plus, func}) => {
  return (
    <div className="package-card shadow">
        <h4>{item.name}</h4>
        {
            plus ? <Button variant="contained" onClick={()=>func(item)}>+</Button> 
            : <Button variant="contained" onClick={()=>func(item)}>-</Button>
        }
    </div>
  )
}

export default PackageCard