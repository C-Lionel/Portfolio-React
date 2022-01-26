// import logo from './logo.svg';

import './App.css';
import { Navbar, CenteredText, TextWithImage } from './components';
// Font Roboto Font
import '@fontsource/roboto';
// Font Icons
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// import MenuIcon from '@material-ui/icons/Menu';





function App() {
  return (
    <div className="root">

      <Navbar />
      <CenteredText />
      <TextWithImage />

    </div>
  );
}

export default App;
