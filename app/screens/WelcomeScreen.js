import React from 'react';
import { SafeAreaView, StyleSheet,Image, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen () {
  return (
  <SafeAreaView style={styles.container}>
    <View style = {styles.logoContainer}>
        <Image
            style = {{
                width:100,  
                height: 100,
                borderRadius: 15,
            }}
            source = { require ("../assets/NeighbourNet-logo.jpeg") }
        />
        <Text style= {styles.tagline} numberOfLines={2}>BUILT FOR COMMUNITY WELLBEING</Text>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="Sign-In" />
      <AppButton title="Sign-Up" color="secondary"/>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
      position: "absolute",
      top: 70,
      alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20
  },
  tagline:{
    fontSize:12, 
    fontWeight:"bold",
    paddingVertical: 15,
    textShadowRadius: 10,
    textShadowColor: "dodgerblue"
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  }
});

export default WelcomeScreen;
