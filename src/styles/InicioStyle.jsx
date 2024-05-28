import styled, { keyframes } from 'styled-components';

export const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const FloatingImage = styled.img`
  border-radius: 50%;
   width: 20vw;
  height: auto;
  display: block;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
        width:40vw;
  }
`;

export const FloatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
export const Sessao = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 88vh;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        justify-content: space-between;
  }
`
export const Caixa = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`
export const Titulo = styled.h2`
    font-size: 40px;
`
export const SubTitulo = styled.h3`
    font-size:20px ;
    color:#828282 ;
`
export const Button = styled.button`
    background-color: #FF69B4;
    padding: 8px;
    cursor: pointer;
    font-size: 20px;
    border: none;
    width: 18vw;
    border-radius: 20px;
    @media (max-width: 768px) {
       
  }
`