import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { SetList, SetView, LyricsView } from './components/LyricsComponents.js';
import lyricsData  from './data/lyrics-data.json';

export default MainPage = () => (
  <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
    <Router>
      <Scene key="root" hideNavBar hideTabBar>
        <Scene key="tabBar" component={NavigationDrawer}>
          <Scene
            key="main"
            tabs
            tabBarStyle={styles.tabBarStyle}
            tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
          >
            <Scene key="tab_songs"
              title="All Songs"
              component={() => (<SetView lyrics={lyricsData.songs}/>)}
              initial={true} />
            <Scene key="tab_sets" title="Sets">
              <Scene
                key="setList"
                component={() => (<SetList sets={lyricsData.sets}/>)}/>
              <Scene
                key="setView"
                component={SetView}
                title="Set"/>
            </Scene>
          </Scene>
        </Scene>
        <Scene key="lyricsView" component={LyricsView} title="Lyrics"/>
      </Scene>
    </Router>
  </View>
);