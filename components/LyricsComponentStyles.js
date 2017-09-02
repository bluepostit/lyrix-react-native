import { StyleSheet } from 'react-native';

const LyricsViewStyles = StyleSheet.create({
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

const LyricsListStyles = StyleSheet.create({
    list: {
    flex: 1,
    paddingTop: 25,
    marginTop: 28,
  },
  separator: {
    height: 10,
    backgroundColor: "black",
    color: "black",
  },
})

const LyricsListItemStyles = StyleSheet.create({
  item: {
    padding: 6,
    marginTop: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    //height: 49,
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#000',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textArtist: {
    fontSize: 16,
    fontStyle: 'italic'
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
  lyricsListButtonText: {
    fontSize: 18,
  }
})

export { LyricsViewStyles, LyricsListStyles, LyricsListItemStyles };