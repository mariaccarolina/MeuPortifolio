import React from "react"
import Fotocarol from "../assets/carolina.jpeg"
import {Container, Texto, Foto} from "../styles/SobreStyle"

function Sobre() {
    return (
        <Container>
            <div>
            <h2>Sobre mim</h2>
            <Texto>Olá, sou a Carol, tenho 30 anos e sou formada em Pedagogia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas. Por amor à tecnologia, fiz uma transição de carreira e estou realizada ensinando tecnologia. Acredito no poder transformador da TI e estou comprometida em mudar a vida de muitas pessoas através do ensino tecnológico.</Texto>
            </div>
            <Foto src={Fotocarol} alt="" />
        </Container>
    )
}
export default Sobre