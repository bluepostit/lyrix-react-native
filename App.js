import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Router, Scene, Stack } from 'react-native-router-flux';
import { SetList, SetView, LyricsView, LyricsNavTabBar } from './components/LyricsComponents.js';
import lyricsData  from './data/lyrics-data.json';

{/*class LyricsTabbedView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: lyricsData
    };
  }

  renderSetList () {
    console.log('renderSetList()');
    return (
      <Text>Hello</Text>
    );
  }

  onSetListItemPress = (item) => {
    Actions.setView({set: item})
  }

  render() {
    console.log('LyricsTabbedView render()');
    return (
      <View>
        <Scene key="sets" title="Sets">
          <Scene
            key="allSets"
            title="All Sets"
            component={SetList}
            />
          <Scene key="setView" title="A Set" component={SetView}/>
        </Scene>
        <Scene key="allSongs" title="All" component={SetView}/>
        <SetList sets={lyricsData.sets} onItemPress={(item) => (this.onSetListItemPress(item))}/>
      </View>
    );
  }
}*/}

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
    let newSongs = set.songs.map((id) => {
      return this.state.lyricsData.songs.find((song) => (song.id == id));
    });
    let newSet = {
      id: set.id,
      title: set.title,
      songs: newSongs
    };
    return newSet;
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Router>
          <Scene key="root">
            <Scene
              key="allSets"
              title="All Sets"
              component={() => (
                <SetList
                  sets={this.state.lyricsData.sets}
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