import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle.js';

// Veja como a importação ficou mais curta:
import { Home } from './components/Home';
// O React automaticamente procura por './components/Header/index.jsx'
import { Produtos } from './components/Produtos/produtos.jsx';
import { Footer } from './components/Footer'
import { Contatos } from './components/Contatos'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
    <Produtos />
    <Contatos />
    <Footer />
    {/* Provavelmente você vai importar uma "página" aqui, como a Home */}
  </React.StrictMode>,
)