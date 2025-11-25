import { Produtoscontainer } from "./styles-produtos";

export function Produtos() {
  return (
    <Produtoscontainer>
        <div className="prod">
            <h1>Conheça todos os nossos produtos</h1>
        </div>

        <div className="produtos-grid">
            
            <div className="produto1">    
                <img src="/src/assets/doce.jpeg" alt="brigadeiro" className="doce"/>  
                    <h2>DOCES</h2>     
                        <div className="inner-box"><p>SAIBA MAIS</p></div> 
            </div>

            <div className="produto2">
                <img src="/src/assets/donuts.jpeg" alt="donuts" className="doce"/>  
                    <h2>DONUTS</h2>     
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
            </div>

            <div className="produto3">
                <img src="/src/assets/pipoca.jpeg" alt="pipoca" className="doce"/>
                    <h2>PIPOCAS</h2>
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
            </div>
        </div>

    </Produtoscontainer>
  );
}
