import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CardDetails from './../CardDetails/CardDetails';
import './CardList.css';

const CardList = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const {data} = await axios.get(`http://127.0.0.1:8000/api/movies`);
        console.log(data)
        setLoading(false)
        setMovies(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies();
  },[]);

  return (
    <div className="cardlist-container">
        {
          movies &&
          movies.data.map(movie => (
            <CardDetails name={movie.name} release={movie.release} rating={movie.rating} key={movie._id}/>
          ))
        }
    </div >
  )
}

export default CardList