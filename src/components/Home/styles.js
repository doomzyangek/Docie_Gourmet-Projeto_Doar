import styled from 'styled-components';

export const Homecontainer = styled.div`
  background-image: url('/src/assets/parede.png'); 

  background-repeat: no-repeat; 
  background-size: cover;       
  background-position: center;

  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .texto h1{
    font-family: 'Ephesis', cursive;
    font-style: normal;
    font-size: 90px;
    color: #D94A6E;
    transition: transform 0.5s ease-in-out;
    
    &:hover {
      transform: scale(1.03);
      filter: drop-shadow(0 0 0.75rem #D94A6E);
      cursor: url('/src/assets/rosquinha_mordida.png') 16 16, auto;
    }
  }
  .Logo img{
    width: 320px;
    margin-top: 60px;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.03);
      filter: drop-shadow(0 0 0.75rem #D94A6E);
      cursor: url('/src/assets/rosquinha_mordida.png') 16 16, auto;
    }
  }`;