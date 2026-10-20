import axios from 'axios';
import { useEffect } from 'react';

function Person(){
    const [person, setPerson] = useState(0);
    const [carregando, setCarregando] = useState(true);

     useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person/9")
                setPerson(res.data);
                console.log("Sucess:", res.data)
                setLoading(false);
    }catch (error) {                         
        setLoading(false)                      
        setError(true)                          
        console.log("Error: ", error)           
      }

    }
    getData()                                
  }, [])
  return(
       <div id="docs">
          <h2>Filme que não gostei</h2>         {/* titulo de uma parte do site */}
          <p>{filme.Title}</p>                  {/* apresenta o titulo do objeto filme */}
          <img src={filme.Poster} width="170"/> {/* apresenta o poster do objeto filme */}
          <p>{filme.Ratings[1].Source}</p>      {/* apresenta uma avaliação do objeto filme */}
          <p>{filme.Ratings[1].Value}</p>
          <p></p>
          <p></p>
        </div>

  )
  
 }      
    
export default person