import React, { useEffect } from 'react'

const Test = () => {

const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=7b399627&"


const getMovieData=async()=>{
 try {
    const res =await fetch(apiUrl);
    const  data =await res.json()
    console.log(data)
 } catch (error) {
    // console.log(error.message)
    console.log(error)
 }
}

useEffect(()=>{
    getMovieData()
},[])
  return (
    <div>
      
    </div>
  )
}

export default Test
