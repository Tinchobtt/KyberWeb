import { HashLink } from "react-router-hash-link"

const PageNotFound = () => {
  return (
    <main>
      <div id="notFound">
        <h2>Page Not Found</h2>
        <p className="error404">Error: 404</p>
        <p>{"We're sorry, the page you're looking for does not exist or has been moved."}</p>
        <HashLink to={'/#start'}>Return to Home</HashLink>
      </div>
    </main>
  )
}

export default PageNotFound