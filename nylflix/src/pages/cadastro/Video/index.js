/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import playlistsRepository from '../../../repositories/playlists';

function CadastroVideo() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const playlistTitles = playlists.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
    playlist: 'teste',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
    playlistsRepository.getAll().then((playlistsFromServer) => {
      setPlaylists(playlistsFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // alert('Video Cadastrado com sucesso!!!1!');

          const categoriaEscolhida = categorias.find(
            (categoria) => categoria.titulo === values.categoria
          );
          const playlistEscolhida = playlists.find(
            (playlist) => playlist.titulo === values.playlist
          );

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
              playlistId: playlistEscolhida.id,
            })
            .then(navigate('/'));
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <FormField
          label="Playlist"
          name="playlist"
          value={values.playlist}
          onChange={handleChange}
          suggestions={playlistTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <br />
      <br />
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      <br />
      <br />
      <Link to="/cadastro/playlist">Cadastrar PlayList</Link>
      <br />
      <br />
      <br />
      <br />
    </PageDefault>
  );
}

export default CadastroVideo;
