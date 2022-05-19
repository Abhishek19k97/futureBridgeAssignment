import React from 'react'
import './CardDetails.css'

const CardDetails = ({name, release, rating}) => {
  const stars = [];
  for (let i = rating; i > 0; i--){
    stars.push(
      <i class="fa fa-star" aria-hidden="true" key={i}></i>
    )
  }
  return (
      <div className='card-container'>
        <div className="card-header">
          <h2>{name}</h2>
        </div>
        <div className="card-body">
        <div className="card-body-element">release: {release}</div>
        <div className="card-body-element">
          <div class="rating-box">
           {stars}
          </div>
        </div>
        </div>
      </div>
  )
}

export default CardDetails