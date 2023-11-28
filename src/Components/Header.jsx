import React from "react";
import { Link } from "react-router-dom";
import {StyleHeader, Navegacao } from "../styles/HeaderStyle"

function Header() {
    return (
        <StyleHeader>
          <nav>
          <Navegacao>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos" >Projetos</Link>
            </li>
          </Navegacao>
            </nav>  
        </StyleHeader>
    )
}

export default Header