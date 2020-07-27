import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';

import './menu.css';

function Menu() {
  return (
    <nav class="Menu">
      <a href="/">
        <img class="Logo" src={logo} alt="Nylflix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
