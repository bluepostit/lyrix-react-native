import React, { Component } from 'react';
import {
  Button,
  FlatList,
  List,
  ListItem,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import SortableListView from 'react-native-sortable-listview';

const LyricsView = (props) => {
  let lyrics = props.lyrics;
  return (
    <ScrollView contentContainerStyle={lyricsViewStyles.container}>
      {/*<Text style={lyricsViewStyles.title}>{lyrics.title}</Text>*/}
      {/*<Text style={lyricsViewStyles.artist}>{lyrics.artist}</Text>*/}
      <Text style={lyricsViewStyles.lyrics}>{lyrics.lyrics}</Text>
    </ScrollView>
  );
};

const LyricsListItem = ({lyrics, onPress, separators}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(lyrics)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={styles.lyricsListItem}>
        <Text style={styles.lyricsListItemTextTitle}>{lyrics.title}</Text>
        <Text style={styles.lyricsListItemTextArtist}>{lyrics.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

class LyricsList extends Component {
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
      <View style={styles.lyricsListSeparator}/>
    );
  };

  render() {
    return (
      <View style={styles.lyricsList}>
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

const lyricsViewStyles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 43,
    paddingLeft: 6,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  artist: {
    fontStyle: 'italic',
    textAlign: 'center'
  },
  lyrics: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
  },

})
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  lyricsList: {
    flex: 1,
    paddingTop: 25,
    marginTop: 28,
  },
  lyricsListItem: {
    padding: 6,
    marginTop: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    //height: 49,
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#000',
  },
  lyricsListItemTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lyricsListItemTextArtist: {
    fontSize: 16,
    fontStyle: 'italic'
  },
  lyricsListSeparator: {
    height: 10,
    backgroundColor: "black",
    color: "black",
  },
  lyricsListButtonText: {
    fontSize: 18,
  }
})

export { LyricsList, LyricsView };