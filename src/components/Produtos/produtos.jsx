import { Produtoscontainer } from "./styles-produtos";

export function Produtos() {
  return (
    <Produtoscontainer>
        <div className="prod">
            <h1>Conheça todos os nossos produtos</h1>
        </div>

        <div className="produtos-grid">
            
            <div className="produto1">
                <div className="inner-box"><p>SAIBA MAIS</p></div>
                <h2>DOCES</h2>
            </div>

            <div className="produto2">
                <div className="inner-box"><p>SAIBA MAIS</p></div>
                <h2>DONUTS</h2>
            </div>

            <div className="produto3">
                <div className="inner-box"><p>SAIBA MAIS</p></div>
                <h2>PIPOCAS</h2>
            </div>
        </div>
    </Produtoscontainer>
  );
}
