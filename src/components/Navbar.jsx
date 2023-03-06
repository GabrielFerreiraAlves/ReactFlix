import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import '../styles/navbar.sass'
import {BsSearch} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if(!search){
      return
    } else {
      navigate(`/search?q=${search}`)
      setSearch("")
    }
  }
  return (
    <header>
       <a href=""><Link to="/"><FaReact className="icon"/>React<span>Flix</span></Link></a>
       <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="Digite um nome de filme" onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button type='submit'><BsSearch/></button>
       </form>
      
    </header>   
  )
}

export default Navbar