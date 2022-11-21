import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Principal from './Components/Paginas/principal';
import InicioSesion from './Components/Paginas/inicioSesion';
import Carrito from './Components/Paginas/carrito';
import Desayunos from './Components/Paginas/desayunos';
import Botanas from './Components/Paginas/botanas';
import Bebidas from './Components/Paginas/bebidas';


function App() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Principal/>} />
                    <Route exact path="/inicioSesion" element={<InicioSesion/>} />
                    <Route  path="/carrito" element={<Carrito/>} />
                    <Route  path="/desayunos" element={<Desayunos/>} />
                    <Route  path="/botanas" element={<Botanas/>} />
                    <Route  path="/bebidas" element={<Bebidas/>} />
                </Routes>

            </Router>

        </>
    );

}

export default App;
