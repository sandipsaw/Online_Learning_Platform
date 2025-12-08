import React, { Fragment } from 'react'
import Mainroute from './Routes/Mainroute'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div className='bg-[#f8fafc]'>
      <Nav/>
      <Mainroute/>
    </div>
  )
}

export default App