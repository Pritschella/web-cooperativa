import React from "react"
import {Link} from 'react-router-dom'


const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
                <div className="container-fluid">
                    <Link to="/">
                        <img src='./logo_colegio.jpg' width="30" alt="."/>
                    </Link>
                    <h3> <strong> Cafetería CDMM Jerez </strong></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/"><strong>Principal</strong></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/inicioSesion"><strong>Inicio Sesion</strong></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/carrito"><strong>Carrito</strong></Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar
