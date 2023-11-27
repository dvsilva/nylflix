/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */

import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function PlayListsCarousel({ title, color, playLists }) {
  return (
    <VideoCardGroupContainer>
      {title && (
        <Title style={{ backgroundColor: color || 'red' }}>{title}</Title>
      )}
      <Slider>
        {playLists.map((playlists) => (
          <SliderItem key={playlists.titulo}>
            <VideoCard
              videoTitle={playlists.titulo}
              videoURL={`/playlist/${playlists.id}`}
              categoryColor={playlists.color}
              thumbnailURL={playlists.thumbnail}
            />
          </SliderItem>
        ))}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default PlayListsCarousel;
