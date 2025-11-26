import React from 'react';
<<<<<<< HEAD
import fundo from '/src/assets/parede.png';
=======
>>>>>>> 3df416de80d430b683c7b750248be3c0ebd35d49
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