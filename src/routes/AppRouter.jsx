import {routes} from './routes'
import PageNotFound from '../components/pages/404/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            {
                routes.map( ({id, path, Element}) => <Route key={id} path={path} element={<Element />} />)
            }
          <Route path="*" element={<PageNotFound/>} />
        </Route>
    </Routes>
  )
}

export default AppRouter