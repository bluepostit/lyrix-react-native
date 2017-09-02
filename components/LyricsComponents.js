import React, { Component } from 'react';
import {
  Button,
  FlatList,
  List,
  ListItem,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import SortableListView from 'react-native-sortable-listview';
import {
  LyricsTabNavBarStyles,
  LyricsViewStyles,
  LyricsListStyles,
  LyricsListItemStyles,
  SetListStyles,
  SetListItemStyles,
 } from './LyricsComponentStyles.js';

class LyricsNavTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'songs'
    };
  }

  render() {
    return (
      <Tabs
        style={LyricsNavTabBar.tabBar}
        selectedStyle={{color:'red'}}
        selected={this.state.page}
        onSelect={(el) => this.setState({page: el.props.name})}
      >
        <Text name="allSongs">Songs</Text>
        <Text name="sets">Sets</Text>
      </Tabs>        
    );
  }
}

const LyricsView = (props) => {
  let lyrics = props.lyrics;
  return (
    <ScrollView contentContainerStyle={LyricsViewStyles.container}>
      {/*<Text style={lyricsViewStyles.title}>{lyrics.title}</Text>*/}
      {/*<Text style={lyricsViewStyles.artist}>{lyrics.artist}</Text>*/}
      <Text style={LyricsViewStyles.lyrics}>{lyrics.lyrics}</Text>
    </ScrollView>
  );
};

const LyricsListItem = ({lyrics, onPress, separators}) => {
  let firstRowText = lyrics.title +
    (!!lyrics.key ? (" (" + lyrics.key + ")") : "");
  return (
    <TouchableOpacity
      onPress={() => onPress(lyrics)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={LyricsListItemStyles.item}>
        <Text style={LyricsListItemStyles.textTitle}>{firstRowText}</Text>
        <Text style={LyricsListItemStyles.textArtist}>{lyrics.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

/************************
 *        SETS          *
 ************************/

/* The list of Sets (songlists) */
class SetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
    };
  }

  onItemPress = (item) => {
    this.props.onItemPress(item);
  }

  renderItem = ({item, separators}) => {
    return (
      <SetListItem
        set={item}
        onPress={() => this.onItemPress(item)}
        separators={separators}
      />
    );
  }

  renderSeparator = () => {
    return (
      <View style={LyricsListStyles.separator}/>
    );
  };

  render() {
    return (
      <View style={SetListStyles.list}>
        <FlatList
          data={this.props.sets}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}>
          ItemSeparatorComponent={this.renderSeparator}
        </FlatList>
      </View>
    );
  }
}

/* An individual set item in its containing list */
const SetListItem = ({set, onPress, separators}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(set)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={SetListItemStyles.item}>
        <Text style={SetListItemStyles.textTitle}>{set.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

/* View for an individual set (songlist) */
class SetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: (new Map(): Map<string, boolean>),
    };
  }

  onItemPress = (item) => {
    let title = () => (
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
    )
    Actions.lyricsView({
      lyrics : item,
      title: title
    });
  }

  renderItem = ({item, separators}) => {
    return (
      <LyricsListItem
        lyrics={item}
        onPress={() => this.onItemPress(item)}
        separators={separators}
      />
    );
  }

  renderSeparator = () => {
    return (
      <View style={LyricsListStyles.separator}/>
    );
  };

  render() {
    let songs = this.props.set.songs;
    return (
      <View style={LyricsListStyles.list}>
        <FlatList
          data={songs}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}>
          ItemSeparatorComponent={this.renderSeparator}
        </FlatList>
      </View>
    );
  }
}



export { SetList, SetView, LyricsView, LyricsNavTabBar };