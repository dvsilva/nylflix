import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Canvas from '../../components/Canvas';
import Button from '../../components/Button';

function Pagina404() {
  return (
    <>
      <Container>
        <Button as={Link} className="ButtonLink" to="/">
          Ir para home
        </Button>

        <Canvas />
      </Container>
    </>
  );
}

export default Pagina404;
