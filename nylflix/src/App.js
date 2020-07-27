import React from 'react';

import Dados from './data/dados_iniciais.json';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#414141' }}>
      <Menu />

      <BannerMain
        videoTitle={Dados.categorias[0].videos[0].titulo}
        url={Dados.categorias[0].videos[0].url}
        videoDescription={Dados.categorias[0].link_extra.text}
      />

      <Carousel ignoreFirstVideo category={Dados.categorias[0]} />
      <Carousel ignoreFirstVideo category={Dados.categorias[1]} />
      <Carousel ignoreFirstVideo category={Dados.categorias[2]} />
      <Carousel ignoreFirstVideo category={Dados.categorias[3]} />
      <Carousel ignoreFirstVideo category={Dados.categorias[4]} />
      <Carousel ignoreFirstVideo category={Dados.categorias[5]} />

      <Footer />
    </div>
  );
}

export default App;
