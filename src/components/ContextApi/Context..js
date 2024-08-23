import React, { useContext, useEffect, useState } from "react";

// Context.js
export const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;








const AppContext = React.createContext();

const AppProvider = ({ children }) => {


    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError]= useState({show:"false", msg:""});
    const [movieData, setMovieData] = useState([]);
    const [query, setQuery] = useState("Hacker")


    const getMovieData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if(data.Response === "True"){
                setIsLoading(false)
                setMovieData(data.Search)
                setIsError({show:false,
                    msg:""
                })
               
            }
            else{
                setIsError({show:true,
                    msg:data.Error
                })
            }
        
        } catch (error) {
            console.log(error)
        }
    }


   
    useEffect(() => {
       let timerOut= setTimeout(()=>{
        
            getMovieData(`${apiUrl}&s=${query}`);  
        },.800);
        return()=>clearTimeout(timerOut);
    }, [query]);


    return <AppContext.Provider  value={{isLoading, isError, movieData, query, setQuery}}>
        {children}
    </AppContext.Provider>


}

const useCustomHook = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useCustomHook };