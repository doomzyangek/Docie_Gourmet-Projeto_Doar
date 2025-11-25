import React from 'react';
import logoImageBW from '/src/assets/DocieLogoBW.png';
import { FooterContainer } from './styles.js';

export function Footer() {
  return (
    <FooterContainer>

      <div className="logo">
        <img src={logoImageBW} alt="LogoBW" />
      </div>

      <div>
        <p>
          Todos os direitos reservados a Docie Gourmet
        </p>
        <p>
          @docie.gourmet__
        </p>
      </div>

    </FooterContainer>
  );
}