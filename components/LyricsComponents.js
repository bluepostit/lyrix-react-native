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
import SortableListView from 'react-native-sortable-listview';
import { LyricsViewStyles, LyricsListStyles, LyricsListItemStyles } from './LyricsComponentStyles.js';


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
  return (
    <TouchableOpacity
      onPress={() => onPress(lyrics)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={LyricsListItemStyles.item}>
        <Text style={LyricsListItemStyles.textTitle}>{lyrics.title}</Text>
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
    let title = () => (
      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
    )
    Actions.setView({
      set : item,
      title: title
    });
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
    console.log('rendering separator');
    return (
      <View style={LyricsListStyles.separator}/>
    );
  };

  render() {
    return (
      <View style={LyricsListStyles.list}>
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
    console.log('rendering separator');
    return (
      <View style={LyricsListStyles.separator}/>
    );
  };

  render() {
    return (
      <View style={LyricsListStyles.list}>
        <FlatList
          data={this.props.lyrics}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}>
          ItemSeparatorComponent={this.renderSeparator}
        </FlatList>
      </View>
    );
  }
}



export { SetList, SetView, LyricsView };