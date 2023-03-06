import { useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import CardMovie from '../components/CardMovie'
import '../styles/sectionMovies.sass'
import '../styles/search.sass'

const Search = () => {
  const searchUrl = "https://api.themoviedb.org/3/search/movie?"
  const key = "api_key=4afe94f91c82f3d8faf5935a6b684fbf"
  const [searchParams] = useSearchParams()
  const [movies,setMovies] = useState([])
  const query = searchParams.get("q")
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {
     getSearchedMovies(`${searchUrl}${key}&query=${query}`)
  }, [query])

  return (
    <div>
      <h1 className="searched">Busca por: <span>{query}</span></h1>
      <div className="container-movies">
      {movies.length > 0 && movies.map((movie) => 
        <CardMovie name={movie.title} img={imgUrl+movie.poster_path} star={(movie.vote_average).toFixed(1)} key={movie.id} id={movie.id}/>
              )
        }  
      </div>
    </div>
  )
}

export default Search