import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { LyricsList, LyricsView } from './LyricsComponents.js';
import lyricsData  from './data/lyrics-data.json';

export default MainPage = () => (
  <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <Router>
      <Scene key="root">
        <Scene key="lyricsList" component={() => (<LyricsList lyrics={lyricsData}/>)} title="Lyrics List" initial={true}/>
        <Scene key="lyricsView" component={LyricsView} title="Lyrics"/>
      </Scene>
    </Router>
  </View>
);