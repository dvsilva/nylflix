/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PlayListCarousel from '../../components/PlayListCarousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import playlistsRepository from '../../repositories/playlists';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [playLists, setPlayLists] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        // console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });

    playlistsRepository
      .getAll()
      .then((playlistsFromServer) => {
        setPlayLists(playlistsFromServer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 || playLists.length === 0 ? (
        <div>Loading...</div>
      ) : null}

      {dadosIniciais.length > 0 ? (
        <div key={dadosIniciais[0].id}>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={dadosIniciais[0].videos[0].description}
          />
        </div>
      ) : null}

      {playLists.length > 0 ? (
        <PlayListCarousel title="Playlists" color="red" playLists={playLists} />
      ) : null}

      {dadosIniciais.map((categoria) => (
        <Carousel key={categoria.id} category={categoria} />
      ))}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      /> */}
    </PageDefault>
  );
}

export default Home;
