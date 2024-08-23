import React from 'react'
import Test from './components/Test'
import Navbar from './components/Search/Search'
import Home from './components/Home/Home'
import Cards from './components/Cards/Cards'
import SingleMovie from './components/SingleMovie/SingleMovie'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter  basename='/'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies/:id' element={<SingleMovie/>}/>

    </Routes>
   </BrowserRouter>
  )
}

export default App
