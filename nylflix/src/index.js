import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/Pagina404';

// Desafio master blaster na descrição
// Colocar um jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
// const Pagina404 = () => <div>Página 404</div>;

// <Route path="/" component={Home} exact />
// <Route path="/cadastro/video" component={CadastroVideo} />
// <Route path="/cadastro/categoria" component={CadastroCategoria} />
// <Route component={Pagina404} />

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cadastro/video',
      element: <CadastroVideo />,
    },
    {
      path: '/cadastro/categoria',
      element: <CadastroCategoria />,
    },
    {
      element: <Pagina404 />,
    },
  ]);
  return routes;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
