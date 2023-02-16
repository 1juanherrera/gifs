import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Gif from './components/Gif'

function App() {

  // STATES

  const [ data, setData ] = useState([])
  const [ search, setSearch ] = useState('spiderman')
  

    const url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=ixkjEuA4OTXxCLZibf9WaszsjvlGsPD7&limit=15`

    // AXIOS 

    const getApiGif = () => {
      axios
      .get(url)
      .then(res => {
        console.log(res.data.data)
        setData(res.data.data)
      })
      .catch(error => console.error(error))
    }

    useEffect(() => {
      getApiGif()
    }, [search])

    // SEARCH

    const searchGif = (e) => {
      e.preventDefault()

      setSearch( e.target[0].value.toLowerCase() )
    }

  return (
    <>
            <div className='title'>
              <h1>GIFS</h1>
              <i className='bx bx-search-alt'></i>
            </div>
            <form onSubmit={(e) => searchGif(e)} 
                  className='search'>
                    <input required placeholder='spiderman...' className='input__text' type="text" />
                    <button className='input__submit' type="submit"><i className='bx bx-search'></i></button>
            </form>
              
            < Gif data={data}/>
            <div className='footer'>
              <span>Made by  <b>Juan Herrera</b></span>
              <a target='_blank' href="https://www.linkedin.com/in/juanherreramu%C3%B1oz/"><i className='bx bxl-linkedin-square'></i></a>
              <a target='_blank' href="https://github.com/1juanherrera"><i className='bx bxl-github'></i></a>
            </div>
    </>
  )
}

export default App
