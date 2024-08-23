import React from 'react'
import { useCustomHook } from '../ContextApi/Context.'
import Cards from '../Cards/Cards'
import Search from '../Search/Search'
import './Home.css'

const Home = () => {
 
  return (
    <div className='wrapper'>
      <Search/>
    <Cards/>
    </div>
  )
}

export default Home
