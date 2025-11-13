import styled from 'styled-components';

export const Produtoscontainer = styled.div`
    background-color: #fff;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .produto{
        width: 400px;
        height: 550px;
        background-color: #83583a;
        border-radius: 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;

        & h2 {
            margin-bottom: 125px;
            font-family: 'Lexend', cursive;
            font-size: 60px;
            color: #faf3c4
        }
    }

    .prod h1 {
        font-family: 'Lexend-Bold', default;
        font-style: normal;
        font-size: 60px;
        color: #D94A6E;
        text-align: center;
    }

    .produtos-grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        margin-top: 50px;
    }

    .inner-box {
        width: 350px;
        height: 100px;
        background-color: #faf3c4;
        border-radius: 30px;
        margin-bottom: 10px;
        position: absolute;

        & p{
            font-family: 'Lexend', cursive;
            font-size: 40px;
            color: #83583a;
            text-align: center;
            margin-top: 25px;
            cursor: url('/src/assets/rosquinha_mordida.png') 16 16, auto;
        
        }

    
        &:hover {
            transform: scale(1.05);
            transition: transform 0.5s ease;
            cursor: url('/src/assets/rosquinha_mordida.png') 16 16, auto;
    
        }
    }
    
        

    .doce {
        width: 100%;
        height: 350px;
        border-radius: 15px;
        object-fit: cover;
        margin: 0; 
    }

`;
