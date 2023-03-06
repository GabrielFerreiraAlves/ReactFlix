import '../styles/movieCard.sass'
import { Link } from 'react-router-dom'
import {BsStarFill} from 'react-icons/bs'

const CardMovie = ({name,img,star,id}) => {
  return (
    <div className="movie-card-container">
        <img src={img} alt={name} className="movie-card-img"/>
        <div className="movie-card">
        <h1 className="movie-card-title">{name}</h1>
        <p className="movie-card-vote"><BsStarFill className="movie-card-vote-star"/>{star}</p>
        <button className="movie-card-btn"><Link to={`/movie/${id}`} className="link">Ver Filme</Link></button>
        </div>
    </div>
  )
}

export default CardMovie