import { Text, StyleSheet, StatusBar, Platform } from 'react-native';

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;


const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2: 0,
    borderColor: 'white',
    padding: 12,
    marginTop: StatusBar.currentHeight,
    maxWidth: '80%',
    width: 300,
  },
});
