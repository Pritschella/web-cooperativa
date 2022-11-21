import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'


function Tarjeta({title, image, p, a}) {
  return (
    
    <div className="card text-center"  >
      <img className="card-img-top" src={image} alt="..." />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text text-secondary">{p}</p>
            <a href={a} className="btn btn-outline-dark text-">
              Ir a categoría
            </a>
        </div>
    </div>
  )
}

Tarjeta.propTypes = {
  title: PropTypes.string.isRequired

}

export default Tarjeta