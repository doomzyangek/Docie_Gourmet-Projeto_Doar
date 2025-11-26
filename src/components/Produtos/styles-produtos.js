import styled from 'styled-components';

export const Produtoscontainer = styled.div`

    /* Fundo que estava nas mudanças stashed */
    background-image: url('/src/assets/fundo.png'); 
    background-repeat: no-repeat; 
    background-size: cover;       
    background-position: center;

    /* Configurações gerais */
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .prod h1 {
        font-family: 'Lexend-Bold', sans-serif; /* Ajustei para sans-serif padrão caso falhe */
        font-size: 60px;
        color: #D94A6E;
        text-align: center;
        margin-top: 50px;
        font-weight: 1000;
    }

    .produtos-grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        margin-top: 50px;
    }

    /* --- INÍCIO DA LÓGICA 3D --- */

    /* 1. O Container (Cena) */
    .produto {
        width: 400px;
        height: 550px;
        background-color: transparent; /* O fundo agora vai nas faces */
        perspective: 1000px; /* Dá a profundidade 3D */
        cursor: pointer;
    }

    /* 2. O Container Interno (Quem gira) */
    .flip-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s; /* Tempo do giro */
        transform-style: preserve-3d;
    }

    /* O Gatilho do Hover: Gira o inner quando passa o mouse no container */
    .produto:hover .flip-inner {
        transform: rotateY(180deg);
    }

    /* 3. Estilos Comuns para Frente e Verso */
    .flip-front, .flip-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden; /* Esconde as costas */
        border-radius: 15px;
        
        /* Flexbox para alinhar conteúdo interno */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* --- ESTILOS DA FRENTE (O antigo .produto) --- */
    .flip-front {
        background-color: #83583a;
        justify-content: flex-end; /* Mantém seu layout original */
        
        & h2 {
            margin-bottom: 125px;
            font-family: 'Lexend', cursive;
            font-size: 60px;
            color: #faf3c4;
            font-weight: 900;
            
        }
    }

    /* --- ESTILOS DO VERSO (Novo) --- */
    .flip-back {
        background-color: #83583a; /* Mesma cor da frente */
        color: #faf3c4;
        transform: rotateY(180deg); /* Já começa virado */
        justify-content: center;
        gap: 20px;
        border: 2px solid #faf3c4; /* Uma borda para diferenciar, opcional */

        & h3 {
            font-family: 'Lexend', cursive;
            font-size: 40px;
            font-weight: bold;
        }
        
        & .descricao {
            font-family: 'Lexend', sans-serif;
            font-size: 24px;
            padding: 0 20px;
        }

        & .preco {
            font-family: 'Lexend', sans-serif;
            font-size: 30px;
            font-weight: bold;
            background-color: #faf3c4;
            color: #83583a;
            padding: 10px 30px;
            border-radius: 20px;
        }
    }

    /* --- SEUS ESTILOS ORIGINAIS --- */

    .inner-box {
        width: 350px;
        height: 100px;
        background-color: #faf3c4;
        border-radius: 30px;
        margin-bottom: 10px;
        position: absolute; /* Mantive absolute pois estava no seu original */
        bottom: 10px; /* Forcei para baixo pois o flex mudou de lugar */
        
        /* Removi o hover effect daqui pois agora o card todo gira, 
           mas mantive o visual */
        
        & p{
            font-family: 'Lexend', cursive;
            font-size: 40px;
            color: #83583a;
            text-align: center;
            margin-top: 25px;
            font-weight: 800;
        }
    }

    .doce {
        width: 100%;
        height: 350px;
        border-radius: 15px 15px 0 0; /* Arredonda só em cima */
        object-fit: cover;
        margin: 0; 
        position: absolute; /* Fixa a imagem no topo */
        top: 0;
    }
`;