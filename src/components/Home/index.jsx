import React from 'react';
import { Homecontainer } from './styles.js';
import Logo from '/src/assets/DocieLogo.png';

export function Home() {
  return (
    <Homecontainer>
      

      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className='texto'>
        <h1>Dociê Gourmet</h1>
      </div>

    </Homecontainer>
  );
}