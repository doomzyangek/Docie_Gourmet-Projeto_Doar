import styled from 'styled-components';

export const HeaderContainer = styled.header`
  /* Estilos do <header> (container) */
  position: fixed;
  width: 100vw;
  top: 0;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: pink;

  /* Estilo do .logo img */
  .logo img {
    height: 60px;
    filter: drop-shadow(0 0 10px #ff009d);
    cursor: pointer;
  }

  /* Estilos do nav*/
  nav {
    
    /* Estilos do <ul> (aninhado dentro do nav) */
    ul {
      display: flex;
      gap: 48px;
    

    /* Estilos do <li> (aninhado dentro do ul) */
    li {
      cursor: pointer;
      position: relative;
      padding: 5px 0;
      transition: transform 0.3s ease;
      font-family: 'Modak', system-ui;
      font-size: 15px;
      color: white;
      filter: drop-shadow(0 0 10px #ff009d);

      /* Os & se referem ao li */
      &:hover {
        transform: scale(1.3);
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleX(0);
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #ff009d;
        transition: transform 0.3s ease;
      }
      
      &:hover::after {
        transform: translateX(-50%) scaleX(1);
        box-shadow: 0 0 3px #ff009d;
        }
      } 
    } 
  } 
`;