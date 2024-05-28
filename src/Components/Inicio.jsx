import React from "react"
import Carol from "../assets/carol.jpeg"
import {Sessao, Caixa, Titulo, SubTitulo, FloatingContainer, FloatingImage , Button} from "../styles/InicioStyle"

function Inicio() {
    return (
        <main>
            <Sessao>
                <Caixa>
                    <Titulo>Olá eu sou a Carol!</Titulo>
                    <SubTitulo>Instrutora de Desenvolvimento Técnico Frontend</SubTitulo>
                    <Button href="https://github.com/mariaccarolina">Github</Button>
                </Caixa>
                <FloatingContainer>
                    <FloatingImage  src={Carol} alt="" />
                </FloatingContainer>
            </Sessao>
        </main>
    )
}
export default Inicio