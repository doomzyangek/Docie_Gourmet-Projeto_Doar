import styled from 'styled-components';

export const ContatosContainer = styled.div`
  background-image: url('/src/assets/fundo.png'); 

  background-repeat: no-repeat; 
  background-size: cover;       
  background-position: center;
width: 100vw;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;

h1{
    color: #D94A6E;
    font-size: 50px;
    font-weight: 700;
    margin: 3rem;
    font-weight: 1000;
}
.cards{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
.card{
    background-color: #83583a;
    border-radius: 15px;
    height: 40vh;
    width: 32vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;
    &:hover{
    transform: scale(1.03);
      filter: drop-shadow(0 0 0.75rem #faf3c4);
      cursor: url('/src/assets/rosquinha_mordida.png') 16 16, auto;
      .titulo,.icone,.descricao{
        filter: drop-shadow(0 0 1.5px #faf3c4);
      }
    }
}
.icone{
    width: 5vh;
    margin: 1vh;
}
.titulo{
    font-size:3rem;
    color: #faf3c4;
    margin-bottom: 1vh;
    & p{
        font-weight: 900;
    }
}
.descricao{
    font-size: 2.5rem;
    color: #faf3c4;
    & p{
        font-weight: 700;
    }
}
.descricao img{
    width: 2.5rem;
}

`

