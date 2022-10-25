import React from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';
import classes from './App.module.scss';

const App = () => {
  const [player, setPlayer] = React.useState(null);
  const options = {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    // i18n: {
    //     restart: "Restart",
    //     rewind: "Rewind {seektime}s",
    //     play: "Play",
    //     pause: "Pause",
    //     fastForward: "Forward {seektime}s",
    //     seek: "Seek",
    //     seekLabel: "{currentTime} of {duration}",
    //     played: "Played",
    //     buffered: "Buffered",
    //     currentTime: "Current time",
    //     duration: "Duration",
    //     volume: "Volume",
    //     mute: "Mute",
    //     unmute: "Unmute",
    //     enableCaptions: "Enable captions",
    //     disableCaptions: "Disable captions",
    //     download: "Download",
    //     enterFullscreen: "Enter fullscreen",
    //     exitFullscreen: "Exit fullscreen",
    //     frameTitle: "Player for {title}",
    //     captions: "Captions",
    //     settings: "Settings",
    //     menuBack: "Go back to previous menu",
    //     speed: "Speed",
    //     normal: "Normal",
    //     quality: "Quality",
    //     loop: "Loop"
    // }
  };
  React.useEffect(() => {
    const playerInstance = new plyr('#player', options);

    setPlayer(playerInstance);

    return () => {
      playerInstance.destroy();
    };
  }, []);

  return (
    <div className={classes.ParentContainer}>
      <div className={classes.VideoContainer}>
        <div id="player">
          <iframe
            title="My Video"
            // src="https://www.youtube.com/watch?v=bTqVqk7FSmY"
            src="https://www.youtube-nocookie.com/embed/bTqVqk7FSmY"
            // src={`https://www.youtube.com/embed/${'bTqVqk7FSmY'}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
