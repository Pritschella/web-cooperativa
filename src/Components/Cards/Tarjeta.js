import React from 'react'
import PropTypes from 'prop-types'


function Tarjeta({title, image, p}) {
  return (
    
    <div className="card text-center">
      <img src={image} alt="" />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">{p}</p>
            <a href="#!" className="btn btn-outline-secondary">
              Go to this website
            </a>
        </div>
    </div>
  )
}

Tarjeta.propTypes = {
  title: PropTypes.string.isRequired

}

export default Tarjeta