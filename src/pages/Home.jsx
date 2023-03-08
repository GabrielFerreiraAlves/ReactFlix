import { useState,useEffect } from 'react'
import CardMovie from '../components/CardMovie'
import '../styles/sectionMovies.sass'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const Home = () => {
    const [PopMovies,setPopMovies] = useState([])
    const [TopRatedMovies,setTopRatedMovies] = useState([])
    const url = "https://api.themoviedb.org/3/movie/popular?"
    const urlTopRated = "https://api.themoviedb.org/3/movie/top_rated?"
    const key = "api_key=4afe94f91c82f3d8faf5935a6b684fbf"
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    
    // POPULAR MOVIES FETCH
    const getPopularMovies = async (url) => {
      const res = await fetch(url)
      const data = await res.json()

      setPopMovies(data.results)
    }

    useEffect(() => {
       getPopularMovies(`${url}${key}`)
    }, [])

    // TOP RATED MOVIES FETCH
     const getTopRatedMovies = async (url) => {
      const res = await fetch(url)
      const data = await res.json()

      setTopRatedMovies(data.results)
    }

    useEffect(() => {
       getTopRatedMovies(`${urlTopRated}${key}`)
    }, [])
    
    
  return (
  <section>
    <div>
      {/* POPULAR MOVIES SWIPER */}
      <h1 className="category">Filmes Populares</h1>
    <Swiper 
      modules={[Navigation]}
      navigation={true}
      breakpoints={
        {
          100: {
            slidesPerView: 1.4
          },
          450:{
            slidesPerView: 2
          },    
          550: {
            slidesPerView: 2.3
          },
          700: {
            slidesPerView: 3
          },
          900: {
            slidesPerView: 4.3
          },
          1100: {
            slidesPerView: 6
          }
        }
      }
      slidesPerView="6"
      className="containerMovies">
      {PopMovies.length > 0 && PopMovies.map((movie) => 
      <SwiperSlide className='slide-item'>
        <CardMovie name={movie.title} img={imgUrl+movie.poster_path} star={movie.vote_average} key={movie.id} id={movie.id}/>
      </SwiperSlide>
              )
        }  
    </Swiper>
    </div>

    {/* TOP RATED MOVIES  */}
     <div>
      <h1 className="category">Filmes melhor avaliados</h1>
    <Swiper 
      modules={[Navigation]}
      navigation={true}
      breakpoints={
        {
          100: {
            slidesPerView: 1.4
          },
          450:{
            slidesPerView: 2
          }, 
          550: {
            slidesPerView: 2.3
          },
          700: {
            slidesPerView: 3
          },
          900: {
            slidesPerView: 4.3
          },
          1100: {
            slidesPerView: 6
          }
        }
      }
      slidesPerView="6"
      className="containerMovies">
      {TopRatedMovies.length > 0 && TopRatedMovies.map((movie) => 
      <SwiperSlide className='slide-item'>
        <CardMovie name={movie.title} img={imgUrl+movie.poster_path} star={movie.vote_average} key={movie.id} id={movie.id}/>
      </SwiperSlide>
              )
        }  
    </Swiper>
    </div>
  </section>
  )
}

export default Home
