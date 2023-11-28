import styled from "styled-components"

export const StyleHeader = styled.header`
    background-color: chocolate;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    border: solid;
    list-style: none;
    width: 40vw;

    @media (max-width:800px){
        width: 80vw;
    }

    a{
        text-decoration: none;
    }
`
