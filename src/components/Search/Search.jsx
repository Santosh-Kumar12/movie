import React from 'react'
import './Search.css'
import { useCustomHook } from '../ContextApi/Context.'

const Search = () => {
  const {query, setQuery, isError} = useCustomHook();
  return (
    // <div>
    //     <div className="search-container">
    //       <form action="">
    //     <h2>Search Movies here</h2>
    //     <input type="text" className="search-box" placeholder="Search..." />
    //       </form>
        
    // </div>
    // </div>
    <>
    <section>

    
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" placeholder='search here' value={query} onChange={(e)=>setQuery(e.target.value)} />
        </div>
      </form>
      <div className="error">
        <p>{isError.show && isError.msg}</p>
      </div>
      </section>
    </>
  )
}

export default Search
