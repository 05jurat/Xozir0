import React from 'react'
import Header from '../Header/Header'
import Foter from '../Footer/Foter'
import Routers from '../../routers/Routers'

import AdminNav from '../../admin/AdminNav'
import {useLocation} from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  return <>


  {
    location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header/>
  }
  
  <div>
    <Routers/>
  </div>
  <Foter/>
  </>
}

export default Layout