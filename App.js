/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import PropTypes from 'prop-types';

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  NativeModules,
  requireNativeComponent
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import MapboxNavigation from "@homee/react-native-mapbox-navigation";
const Freeride = (props) => {
  return <RNFreeride style={styles.container} {...props}/>;
};
Freeride.propTypes = {
  language: PropTypes.array.isRequired,
  origin: PropTypes.array.isRequired,
  destination: PropTypes.array.isRequired,
  waypoints: PropTypes.array.isRequired,
  shouldSimulateRoute: PropTypes.bool,
  onLocationChange: PropTypes.func,
  onRouteProgressChange: PropTypes.func,
  onError: PropTypes.func,
  onCancelNavigation: PropTypes.func,
  onArrive: PropTypes.func,
  showsEndOfRouteFeedback: PropTypes.bool,
};
const RNFreeride = requireNativeComponent('Freeride', Freeride);

const Section = ({children, title}): Node => {
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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Text style={{color: 'black', fontSize: 60}}>hahahahahah</Text> */}
      {/* <Freeride 
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height-100}}
        onLocationChange={(event) => {
          console.log(event.nativeEvent)
          //const { latitude, longitude } = event.nativeEvent;
        }}
      /> */}
      <Freeride 
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height-100}}
        origin={[75.8839, 22.7244]}
        destination={[76.0534, 22.9676]}
        shouldSimulateRoute={false}
        showsEndOfRouteFeedback
        onLocationChange={(event) => {
          const { latitude, longitude } = event.nativeEvent;
        }}
        onRouteProgressChange={(event) => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={(event) => {
          const { message } = event.nativeEvent;
          console.log('error', message);
        }}
        onCancelNavigation={() => {
          console.log('canceled');
        }}
        onArrive={() => {
          console.log('arrived');
        }}
      />
      {/* <MapboxNavigation
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        waypoints={[22.7244, 75.8839, 22.7404, 75.8815, 22.9676, 76.0534]}
        origin={[75.8839, 22.7244]}
        destination={[76.0534, 22.9676]}
        shouldSimulateRoute={false}
        showsEndOfRouteFeedback
        onLocationChange={(event) => {
          const { latitude, longitude } = event.nativeEvent;
        }}
        onRouteProgressChange={(event) => {
          const {
            distanceTraveled,
            durationRemaining,
            fractionTraveled,
            distanceRemaining,
          } = event.nativeEvent;
        }}
        onError={(event) => {
          const { message } = event.nativeEvent;
          console.log('error', message);
        }}
        onCancelNavigation={() => {
          console.log('canceled');
        }}
        onArrive={() => {
          console.log('arrived');
        }}
      /> */}

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
