import React from 'react'
import Tarjeta from "./Tarjeta";



import desayunos from '../assets/desayunos.jpg'
import botanas from '../assets/sabritas.png'
import bebidas from '../assets/bebidas.jpg'


const tarjetas = [
    {
        id: 1,
        title: 'Desayunos',
        image: desayunos,
        p: 'En el apartado de desayunos se encuentra el variado menú de comida que puedes encontrar dentro de la cooperativa escolar.',
        a: './desayunos'
    },
    {
        id: 2,
        title: 'Botanas',
        image: botanas,
        p: 'En el apartado botanas se encuentran los diferentes productos de botanas, como lo son productos de sabritas, barcel, entre otros.',
        a: './botanas'
    },
    {
        id: 3,
        title: 'Bebidas',
        image: bebidas,
        p: 'En el apartado de bebidas se encuentran los productos relacionados con productos coca-cola, jugos naturales, etc.',
        a: './bebidas'
    }
]

function Tarjetas() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 '>
        <div className='row'>
            {

                tarjetas.map(tarjeta => (
                    <div className="col-md-4" key = {tarjeta.id}>
                        <Tarjeta title={tarjeta.title} image={tarjeta.image} p={tarjeta.p} a={tarjeta.a}/>
                    </div>
                ))
            }
            
        </div>

    </div>
  )
}

export default Tarjetas