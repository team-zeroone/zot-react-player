import React from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';
import PropTypes from 'prop-types';

export const PLATFORMS = {
  YOUTUBE: 'YOUTUBE',
  VIMEO: 'VIMEO',
};

const ZotPlayer = (props) => {
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    const playerInstance = new plyr(`#player`);
    setPlayer(playerInstance);

    return () => {
      playerInstance.destroy();
    };
  }, []);

  const source =
    props.platform === PLATFORMS.VIMEO
      ? `https://player.vimeo.com/video/${props.sourceId}`
      : props.platform === PLATFORMS.YOUTUBE
      ? `https://www.youtube-nocookie.com/embed/${props.sourceId}`
      : '';

  return (
    <div
      style={{
        width: props.width ? props.width : '500px',
        height: props.height ? props.height : '250px',
      }}
    >
      <div id="player">
        <iframe title={props.sourceId} src={source}></iframe>
      </div>
    </div>
  );
};

ZotPlayer.propTypes = {
  platform: PropTypes.string.isRequired,
  sourceId: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ZotPlayer;
