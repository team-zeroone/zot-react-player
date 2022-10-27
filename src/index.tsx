import React from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export enum PLATFORMS {
  YOUTUBE = 'YOUTUBE',
  VIMEO = 'VIMEO',
}

interface Props {
  platform: string;
  sourceId: string;
  width?: string;
  height?: string;
}

const ZotPlayer: React.FC<Props> = (props) => {
  const [player, setPlayer]: any = React.useState(null);

  React.useEffect(() => {
    const playerInstance = new Plyr(`#player`);
    setPlayer(playerInstance);

    return () => {
      playerInstance.destroy();
    };
  }, []);

  const getSource = (platform: string) => {
    return platform === PLATFORMS.VIMEO
      ? `https://player.vimeo.com/video/${props.sourceId}`
      : props.platform === PLATFORMS.YOUTUBE
      ? `https://www.youtube-nocookie.com/embed/${props.sourceId}`
      : '';
  };

  const source = getSource(props.platform);

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

export default ZotPlayer;
