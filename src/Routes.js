import React from "react"
import {
    Routes as ReactRoutes,
    Route,
} from 'react-router-dom'
import {
  Home as HomePage,
  Nosotros as NosotrosPage,
  Servicios as ServiciosPage,
} from 'pages'

const Routes = () => {
  return(
    <ReactRoutes>
      <Route
        path={'/'}
        element={<HomePage />}
      />
      <Route
        path={'/home'}
        element={<HomePage />}
      />
      <Route
        path={'/nosotros'}
        element={<NosotrosPage />}
      />
      <Route
        path={'/servicios'}
        element={<ServiciosPage />}
      />
    </ReactRoutes>
  )
}

export default Routes