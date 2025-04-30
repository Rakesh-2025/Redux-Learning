import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='p-4 bg-primary border d-flex justify-content-evenly'>

    
      <div> <Link to="Create_user" className='text-black'>Create</Link> </div>
      <div> <Link to="Users" className='text-black'>Users</Link>  </div>


    </div>
  )
}

export default Home