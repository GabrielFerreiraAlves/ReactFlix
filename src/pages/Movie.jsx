import { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../styles/movie.sass'
import {BsFillCameraVideoFill,BsStarFill} from 'react-icons/bs'


const Movie = () => {
  const url = "https://api.themoviedb.org/3/movie/"
  const key = "api_key=4afe94f91c82f3d8faf5935a6b684fbf"
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  const {id} = useParams()
  const [movie,setMovie] = useState(null)
  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }
  useEffect( () => {
    getMovie(`${url}${id}?${key}`)
  },[])
  return (
    <>{movie && 
    <div className='banner-container'>
      <div className="banner">
        <img src={imgUrl+movie.poster_path} alt={movie.title} />
      </div>
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.tagline}</p>
        <div className='genres'>
          <p>Gêneros:</p>
          {movie.genres.length > 0 && movie.genres.map( (genre) => <p key={genre.id}>{genre.name},</p>)}
        </div>
        <p>Produtora: {movie.production_companies[0].name}</p>
        <p>Lançamento: {movie.release_date}</p>
        <p>Duração: {movie.runtime} min</p>
        <p className="vote"><BsStarFill className="vote-star"/> {(movie.vote_average).toFixed(1)}</p>
        <p className='overview'>{movie.overview}</p>
      </div>
    </div>}</>
  )
}

export default Movie