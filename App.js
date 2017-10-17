import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Actions, Router, Scene, Stack } from 'react-native-router-flux';
import { SetList, SetView, LyricsView, LyricsNavTabBar } from './components/LyricsComponents.js';
import { LyricsTabNavBarStyles } from './components/LyricsComponentStyles.js';
import lyricsData  from './data/lyrics-data.json';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyricsData: lyricsData
    };
  }

  onSetListItemPress(item) {
    let expandedSet = this.getLyricsListForSet(item);
    Actions.setView({set: expandedSet, title: item.title});
  }

  getLyricsListForSet(set) {
    if (!!set.isExpanded) {
      return set;
    }
    let newSongs = set.songs.map((id) => {
      return this.state.lyricsData.songs.find((song) => (song.id == id));
    });
    let newSet = {
      id: set.id,
      title: set.title,
      songs: newSongs,
      isExpanded: true,
    };
    return newSet;
  }

  getAllSets(includePseudoSets) {
    let sets = this.state.lyricsData.sets;
    if (includePseudoSets) {
      let all = {
        title: 'All Songs',
        id: '-1',
        songs: this.state.lyricsData.songs,
        isExpanded: true,
      };
      sets = [all].concat(sets);
    }
    return sets;
  }

  render() {
    let allSets = this.getAllSets(true);
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Router>
          <Scene key="root" navigationBarStyle={LyricsTabNavBarStyles.navBar}>
            <Scene
              key="allSets"
              title="All Sets"
              component={() => (
                <SetList
                  sets={allSets}
                  onItemPress={(item) => (this.onSetListItemPress(item))}
                />
              )}
            />
            <Scene key="setView" component={SetView}/>
            <Scene key="lyricsView" component={LyricsView} />
          </Scene>
        </Router>
      </View>
    );
  }
}

export default MainPage;