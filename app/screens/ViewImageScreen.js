import React from "react";
import {StyleSheet,Image, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from "../config/colors";

function ViewImageScreen () {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons 
                    name="delete" 
                    size={40} 
                    color="white"
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons 
                    name="cancel" 
                    size={40} 
                    color="white"
                />
            </View>
            <Image
                resizeMode= "contain"
                style= {styles.image}
                source={require("../assets/profile.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    closeIcon: {
        width: 50,
        height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    deleteIcon: {
        width: 50,
        height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen;