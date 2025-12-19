import React, { Fragment } from 'react'
import Mainroute from './Routes/Mainroute'
import Nav from './Components/Nav'
import {asyncLoadCourse} from '../src/Store/courseAction'
import { asyncGetUser } from './Store/userAction'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncLoadCourse())
    dispatch(asyncGetUser())
  },[])
  return (
    <div className='pt-15'>
      <Nav/>
      <Mainroute/>
      
    </div>
  )
}

export default App