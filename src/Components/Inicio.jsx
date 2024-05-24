import React from "react"
import Carol from "../assets/carol.jpeg"
import {Sessao, Foto, Titulo, SubTitulo, Button} from "../styles/InicioStyle"

function Inicio() {
    return (
        <main>
            <Sessao>
                <div>
                    <Titulo>Olá eu sou a Carol!</Titulo>
                    <SubTitulo>Instrutora de desenvolvimento técnico</SubTitulo>
                    <Button href="https://github.com/mariaccarolina">Github</Button>
                </div>
                <div>
                    <Foto src={Carol} alt="" />
                </div>
            </Sessao>
        </main>
    )
}
export default Inicio