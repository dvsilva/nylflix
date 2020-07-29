/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import './index.css';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  );
}

function CadastroVideo() {
  const videoInicial = {
    titulo: 'Video 01',
    url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
  };

  const [values, setValues] = useState({ titulo: '', url: '' });
  const [videos, setVideos] = useState([videoInicial]);

  function setVideo(value) {
    setVideos([...videos, value]);
  }

  function handleChange(event) {
    const name = event.target.getAttribute('name') || '';
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form
        onSubmit={event => {
          event.preventDefault();
          setVideo({
            titulo: values.titulo,
            url: values.url,
          });
        }}
      >
        <FormField
          label="Título"
          name="titulo"
          onChange={handleChange}
          value={values.titulo}
          type="text"
        />

        <FormField
          label="URL"
          name="url"
          onChange={handleChange}
          value={values.url}
          type="text"
        />
        <button type="submit">Cadastrar</button>
      </form>

      <section className="listaDeVideos">
        <h2>Vídeos cadastrados</h2>
        <ul>
          {videos.map(video => (
            <a
              href={video.url}
              key={video.titulo}
              className="card"
              style={{
                color: 'red',
                backgroundImage: `url(https://img.youtube.com/vi/${getYouTubeId(
                  video.url
                )}/maxresdefault.jpg)`,
              }}
            >
              <span className="titulo">Título do vídeo</span>
            </a>
          ))}
        </ul>
      </section>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
