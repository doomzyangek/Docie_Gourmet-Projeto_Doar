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
    justify-content: center;
    padding-top: 15px;

    .titulo h1 {
        font-weight: 900;
        font-family: 'Lexend', cursive;
        font-size: 60px;
        color: #D94A6E;
        text-align: center;
        margin-bottom: 2rem;
    }

    .conteudo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        max-width: 1300px;
        
        
    }

    .foto {
        width: 500px;
        border-radius: 10px;
        filter: drop-shadow(0 0 1rem#D94A6E);
    }

    .descricao {
        font-family: 'Lexend', sans-serif;
        font-size: 2rem;
        color: #83583a;
        width: 500px;
        text-align: justify;

        & p{
            font-weight: 700;
        }
    }
`;
