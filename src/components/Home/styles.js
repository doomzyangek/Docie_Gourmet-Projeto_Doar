import styled from 'styled-components';

export const Homecontainer = styled.div`
  background-image: url('/src/assets/tenda.png'); 

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
    
    &:hover {
      transform: scale(1.03);
      filter: drop-shadow(0 0 0.75rem #D94A6E);
      transition: transform 0.5s ease;
      cursor: default;
    }
  }
  .Logo img{
    width: 320px;
    margin-top: 60px;

    &:hover {
      transform: scale(1.03);
      filter: drop-shadow(0 0 0.75rem #D94A6E);
      transition: transform 0.5s ease;
    }
  }`;