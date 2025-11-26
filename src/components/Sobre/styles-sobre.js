import styled from 'styled-components';

export const Sobrecontainer = styled.div`

    background-image: url('/src/assets/parede_papel.png'); 

    background-repeat: no-repeat; 
    background-size: cover;       
    background-position: center;

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;

    .titulo h1 {
        font-weight: 350;
        font-family: 'Lexend', cursive;
        font-size: 60px;
        color: #D94A6E;
        text-align: center;
        margin-bottom: 40px;
    }

    .conteudo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        max-width: 1300px;
        margin-top: 50px;
    }

    .foto {
        width: 500px;
        border-radius: 10px;
    }

    .descricao {
        font-family: 'Lexend-Bold', sans-serif;
        font-weight: 400;
        font-size: 28px;
        color: #83583a;
        width: 500px;
        text-align: justify;
    }
`;
