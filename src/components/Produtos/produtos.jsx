import { Produtoscontainer } from "./styles-produtos";

export function Produtos() {
  return (
    <Produtoscontainer>
        <div className="prod">
            <h1>CONHEÇA NOSSOS PRODUTOS</h1>
        </div>

        <div className="produtos-grid">
            
            {/* --- PRODUTO 1: DOCES --- */}
            <div className="produto">    
                <div className="flip-inner">
                    
                    {/* FRENTE DO CARD */}
                    <div className="flip-front">
                        <img src="/src/assets/doce.jpeg" className="doce"/>  
                        <h2>BROWNIE</h2>     
                        <div className="inner-box"><p>SAIBA MAIS</p></div> 
                    </div>

                    {/* VERSO DO CARD (NOVO) */}
                    <div className="flip-back">
                        <h3>Detalhes</h3>
                        <p className="descricao">Brownie com cobertura especial e Oreo.</p>
                        <p className="preco">R$ 10,00</p>
                    </div>

                </div>
            </div>

            {/* --- PRODUTO 2: DONUTS --- */}
            <div className="produto">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src="/src/assets/donuts.jpeg" className="doce"/>  
                        <h2>DONUTS</h2>     
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
                    </div>
                    <div className="flip-back">
                        <h3>Detalhes</h3>
                        <p className="descricao">Donuts fresquinhos com cobertura de chocolate.</p>
                        <p className="preco">R$ 3,00</p>
                    </div>
                </div>
            </div>

            {/* --- PRODUTO 3: PIPOCAS --- */}
            <div className="produto">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src="/src/assets/pipoca.jpeg" className="doce"/>
                        <h2>PIPOCAS</h2>
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
                    </div>
                    <div className="flip-back">
                        <h3>Detalhes</h3>
                        <p className="descricao">Pipoca gourmet de leite ninho.</p>
                        <p className="preco">R$ 10,00</p>
                    </div>
                </div>
            </div>
            {/* --- PRODUTO 4: BRIGADEIROS --- */}
            <div className="produto">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src="/src/assets/Palha.jpeg" className="doce"/>
                        <h2>PALHA</h2>
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
                    </div>
                    <div className="flip-back">
                        <h3>Detalhes</h3>
                        <p className="descricao">Palha italiana sabor Oreo.</p>
                        <p className="preco">R$ 6,00</p>
                    </div>
                </div>
            </div>
            <div className="produto">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src="/src/assets/Brigadeiros.jpeg"className="doce"/>
                        <h2>DOCES</h2>
                        <div className="inner-box"><p>SAIBA MAIS</p></div>
                    </div>
                    <div className="flip-back">
                        <h3>Detalhes</h3>
                        <p className="descricao">Brigadeiros e Beijinhos sortidos.</p>
                        <p className="preco">R$ 8,00</p>
                    </div>
                </div>
            </div>

        </div>

    </Produtoscontainer>
  );
}