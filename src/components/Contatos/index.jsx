import React from 'react';
import { ContatosContainer } from './styles.js';
import email from '/src/assets/envelope-regular-full.svg';
import telefone from '/src/assets/phone-solid-full.svg';
import arroba from '/src/assets/at-solid-full.svg';
import insta from '/src/assets/instagram-brands-solid-full.svg';

export function Contatos() {
  return (
    <ContatosContainer>
      <h1>CONTATOS</h1>
      <div className='cards'>
        <div className='card'>
          <div className='icone'>
            <img src={email}/>
          </div>
          <div className='titulo'>
            <p>E-MAIL</p>
          </div>
          <div className='descricao'>
            <p>dociegourmet@gmail.com</p>
          </div>
        </div>
        <div className='card'>
          <div className='icone'>
            <img src={telefone}/>
          </div>
          <div className='titulo'>
            <p>TELEFONE</p>
          </div>
          <div className='descricao'>
            <p>11 9999-9999</p>
          </div>
        </div>
        <div className='card'>
          <div className='icone'>
            <img src={arroba}/>
          </div>
          <div className='titulo'>
            <p>REDES SOCIAIS</p>          
          </div>
          <div className='descricao'>
            <p><img src={insta} />@docie.gourmet__</p>
          </div>
        </div>
      </div>

    </ContatosContainer>
  );
}