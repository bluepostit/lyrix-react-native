import { StyleSheet } from 'react-native';

const LyricsTabNavBarStyles = StyleSheet.create({
  tabBar: {
    paddingTop: 50,
    paddingBottom: 50,
    margin: 80
  },
  navBar: {
    backgroundColor: 'steelblue',
  },
  navBarText: {

  }
})

const LyricsViewStyles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 43,
    paddingBottom: 100,
    paddingLeft: 6,
    paddingVertical: 20,
  },
  containerDark: {
    paddingTop: 43,
    paddingBottom: 100,
    paddingLeft: 6,
    paddingVertical: 20,
    backgroundColor: 'black',
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
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    fontSize: 18,
  },
  lyricsDark: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    fontSize: 18,
    color: 'wheat',
  }
})

const LyricsListStyles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 25,
    marginTop: 28,
    backgroundColor: 'black',
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
    color: 'white',
  },
  textArtist: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
  },
})


const SetListStyles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 25,
    marginTop: 28,
    backgroundColor: 'black',
  },
  separator: {
    height: 10,
    backgroundColor: "black",
    color: "black",
  },
})

const SetListItemStyles = StyleSheet.create({
  item: {
    padding: 6,
    marginTop: 1,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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

export {
  LyricsTabNavBarStyles,
  LyricsViewStyles,
  LyricsListStyles,
  LyricsListItemStyles,
  SetListStyles,
  SetListItemStyles,
};