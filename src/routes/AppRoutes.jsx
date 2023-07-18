import {routes} from './routes'
import PageNotFound from '../components/pages/404/PageNotFound'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            {
                routes.map( ({id, path, Element}) => <Route key={id} path={path} element={<Element />} />)
            }
        </Route>
        <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default AppRoutes