import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import playlistsRepository from '../../../repositories/playlists';

function CadastroPlayList() {
  const navigate = useNavigate();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
    thumbnail: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [playlists, setPlayLists] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/playlists'
      : 'https://nylflix-back.onrender.com/playlists';
    // E a ju ama variáveis
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setPlayLists([...resposta]);
    });

    // setTimeout(() => {
    //   setPlayLists([
    //     ...playlists,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma playlist bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Outra playlist bacanudassa',
    //       cor: '#cbd1ff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de PlayList:
        {values.titulo}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          playlistsRepository
            .create({
              titulo: values.titulo,
              descricao: values.descricao,
              cor: values.cor,
              thumbnail: values.thumbnail,
            })
            .then(() => {
              // console.log('Cadastrou com sucesso!');
              navigate('/');
            });

          clearForm();
        }}
      >
        <FormField
          label="Título da PlayList"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Thumbnail da PlayList"
          name="thumbnail"
          value={values.thumbnail}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {playlists.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {playlists.map((playlist) => (
          <li key={`${playlist.titulo}`}>{playlist.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroPlayList;
