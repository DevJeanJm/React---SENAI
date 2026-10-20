import axios from 'axios';
import { useEffect, useState } from 'react';

function Movies(){
    const [movies, setMovies] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

     useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://www.omdbapi.com/?i=tt0903747&apikey=e20e5475")
                setMovies(res.data);
                setLoading(false);
    }catch (error) {                         
        setLoading(false)                      
        setError(true)                          
        console.log("Error: ", error)           
      }

    }
    getData()                                
  }, [])

  if(loading){
    
      return(
            <div>Carregando</div>
      )
      if(error){
        <div>error</div>
      }
     }   
     return (
        <div id="docs">
              <h2>Série mais gostei</h2>         {/* titulo de uma parte do site */}
              <p>{movies.Title}</p>                  {/* apresenta o titulo do objeto filme */}
              <img src={movies.Poster} width="170"/> {/* apresenta o poster do objeto filme */}
              <p>{movies.Ratings[1].Source}</p>      {/* apresenta uma avaliação do objeto filme */}
              <p>{movies.Ratings[1].Value}</p>
              <p></p>
              <p></p>
            </div>
    
     )   
  }
    
export default Movies