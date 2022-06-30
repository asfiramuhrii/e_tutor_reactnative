/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title})=>{
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
var Dictionary = React.createClass({
 
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        var layout =
        <React.View style = { styles.parent } >
 
            <React.Text>
                Type something in English:
            </React.Text>
 
            <React.TextInput />
 
            <React.Text style = { styles.idnLabel } >
                Its Indonesia equivalent is:
            </React.Text>
 
            <React.Text style = { styles.idnWord } >                
            </React.Text>
           
        </React.View>
    ;
  return layout;
      </ScrollView>
    </SafeAreaView>
  );
};

var styles = React.StyleSheet.create({
 
  // For the container View
  parent: {
      padding: 16
  },

  // For the Text label
  germanLabel: {
      marginTop: 20,
      fontWeight: 'bold'
  },

  // For the Text meaning
  germanWord: {
      marginTop: 15,
      fontSize: 30,
      fontStyle: 'italic'
  }
});

export default App;
