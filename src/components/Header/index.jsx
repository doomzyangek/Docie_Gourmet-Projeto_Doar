import React from 'react';
import logoImage from '/src/assets/DocieLogo.png';
import { HeaderContainer } from './styles.js';

export function Header() {
  return (
    <HeaderContainer>

      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Galeria</li>
          <li>Informações</li>
        </ul>
      </nav>

    </HeaderContainer>
  );
}