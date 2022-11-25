import React from "react"
import {Link} from 'react-router-dom'


const footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-primary'>
                <div className='container'>
                    <nav className='row'>
                        <Link to="" className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                            <img src='./logo_colegio.jpg' className='mx-2'  alt=""/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center'><strong>Acerca de nosotros</strong></li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center'><strong>Servicios</strong></li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-center'><strong>Contacto</strong></li>
                        </ul>
                        <p className=' copyright text-center'><strong>© 2022 Colegio Daniel Márquez Medina, Inc. </strong></p>
                    </nav>
                </div>


            </footer>
        </div>
    )
}

export default footer