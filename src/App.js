import React from 'react';
import classes from './App.module.scss';
import ZotPlayer, { PLATFORMS } from './ZotPlayer/ZotPlayer';

const App = () => {
  // bTqVqk7FSmY --> youtube
  // 309741585 --> vimeo
  return (
    <div className={classes.ParentContainer}>
      <ZotPlayer
        platform={PLATFORMS.VIMEO}
        sourceId="309741585"
        width="700px"
        height="350px"
      />
    </div>
  );
};

export default App;
