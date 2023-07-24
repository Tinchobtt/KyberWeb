import { useState } from "react"

export const MenuWidget = ({deployNav}) => {
    const [cross, setCross] = useState(false)

    const handleWidget = ()=>{
        deployNav()
        setCross(!cross);
    }

  return (
    <div className="menu-icon" onClick={handleWidget}>
        <span className={cross ? "line line1 activeLine1" : "line line1"}></span>
        <span className={cross ? "line line2 activeLine2" : "line line2"}></span>
        <span className={cross ? "line line3 activeLine3" : "line line3"}></span>
      </div>
  )
}
