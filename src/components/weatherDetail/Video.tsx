import React from 'react';

const Video: React.FC<{ rawDescription: string }> = ({ rawDescription }) => {
  const video = [
    'raining.mp4',
    'clear-sky.mp4',
    'clouds.mp4',
    'thunderstorm.mp4',
    'snow.mp4',
    'foggy.mp4'
  ];
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        minWidth: '100%',
        minHeight: '100%',
        zIndex: -1,
        opacity: 0.4
      }}>
      {rawDescription.includes('rain') ? <source src={video[0]} type="video/mp4" /> : ''}
      {rawDescription.includes('clear') && <source src={video[1]} type="video/mp4" />}
      {rawDescription.includes('clouds') && <source src={video[2]} type="video/mp4" />}
      {rawDescription.includes('thunderstorm') && <source src={video[3]} type="video/mp4" />}
      {rawDescription.includes('snow') && <source src={video[4]} type="video/mp4" />}
      {rawDescription.includes('mist') && <source src={video[5]} type="video/mp4" />}
    </video>
  );
};

export default Video;
