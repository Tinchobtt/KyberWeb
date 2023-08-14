const ProyectCard = ({proyect}) => {
  return (
    <div className="proyect-card shadow">
        <div className="proyect-content">
        <a href={proyect.link} target="_blanck">
            <img src={proyect.content[0]} alt="" />
        </a>
        </div>
    </div>
  )
}

export default ProyectCard