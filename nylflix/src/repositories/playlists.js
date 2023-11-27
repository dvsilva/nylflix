import config from '../config';

const URL_PLAYLISTS = `${config.URL_BACKEND_TOP}/playlists`;

function create(objetoDaPlayList) {
  return fetch(`${URL_PLAYLISTS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaPlayList),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

function getAll() {
  return fetch(`${URL_PLAYLISTS}`).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_PLAYLISTS}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    }
  );
}

function getByIdWithVideos(id) {
  return fetch(`${URL_PLAYLISTS}/${id}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    }
  );
}

export default {
  getAllWithVideos,
  getByIdWithVideos,
  getAll,
  create,
};
