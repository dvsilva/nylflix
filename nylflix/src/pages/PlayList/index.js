/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideoCardGroupContainer } from './styles';
import BannerMain from '../../components/BannerMain';
import PageDefault from '../../components/PageDefault';
import VideoCard from '../../components/Carousel/components/VideoCard';
import playlistsRepository from '../../repositories/playlists';

function Playlist() {
  const params = useParams();
  const [playListId] = useState(params.id);
  const [playList, setPlayList] = useState();

  useEffect(() => {
    playlistsRepository
      .getByIdWithVideos(playListId)
      .then((playlistsFromServer) => {
        setPlayList(playlistsFromServer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [playListId]);

  return (
    <PageDefault paddingAll={0}>
      {playList == null ? <div>Loading...</div> : null}
      {playList != null && playList.videos.length === 0 ? (
        <div>Playlist sem vídeos até o momento</div>
      ) : null}

      {playList != null && playList.videos.length > 0 ? (
        <div key={playList.id}>
          <BannerMain
            videoTitle={playList.videos[0].titulo}
            videoDescription={playList.videos[0].description}
            url={playList.videos[0].url}
            thumbnail={playList.thumbnail}
          />
          <VideoCardGroupContainer>
            {playList.videos.map((video) => (
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={playList.color}
              />
            ))}
          </VideoCardGroupContainer>
        </div>
      ) : null}
    </PageDefault>
  );
}

export default Playlist;
