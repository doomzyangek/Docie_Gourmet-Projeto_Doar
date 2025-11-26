import { Sobrecontainer } from "./styles-sobre";

export function Sobre() {
  return (
    
    <Sobrecontainer>

      <div className="titulo">
        <h1>SOBRE NÓS</h1>
      </div>

      <div className="conteudo">
        <img src="/src/assets/empresarios.jpeg" alt="Foto da equipe Dociê Gourmet" className="foto"/>

        <div className="descricao">
          <p>
            Somos a Dociê gourmet, uma empresa apaixonada por criar os doces mais
            deliciosos e criativos. Nossa missão é levar alegria a cada mordida,
            utilizando ingredientes de alta qualidade e um toque de carinho em
            cada receita.
          </p>

        </div>

      </div>

    </Sobrecontainer>

  );
}
