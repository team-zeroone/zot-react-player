import React from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';
import classes from './App.module.scss';

const App = () => {
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    const playerInstance = new plyr('#player');
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
            title="bTqVqk7FSmY"
            src="https://www.youtube-nocookie.com/embed/bTqVqk7FSmY"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
