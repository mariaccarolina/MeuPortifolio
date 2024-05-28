import React from "react"
import {Caixa, Img, Section} from "../styles/ProjetosStyle"
import Aranha from "../assets/aranha.png"
import pizza from "../assets/pizza.png"
import soma from "../assets/soma.png"

function Projetos() {
    return (
        <section>
            <h2>Projetos</h2>
           <Section>
            <Caixa>
                <a href="https://mariaccarolina.github.io/spiderman/">
                <Img src={Aranha} alt="" />
                </a>
                <h2>Spider-Man</h2>
                <p>Tecnologias: HTML, CSS.</p>
            </Caixa>
            <Caixa>
                <a href="https://calculadora-git-main-mariaccarolina.vercel.app/">
                <Img src={soma} alt="" />
                </a>
                <h2>Calculadora</h2>
                <p>Tecnologias: React e styled-components</p>
            </Caixa>
            <Caixa>
                <a href="https://la-pizza-amber.vercel.app/">
                <Img src={pizza} alt="" />
                </a>
                <h2>La Pizza</h2>
                <p>React e styled components</p>
            </Caixa>
           </Section>
        </section>
    )
}
export default Projetos