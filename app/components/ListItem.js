import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import AppText from './AppText';

function ListItem({image, title, subTitle}) {
    return (
        <View style={styles.container}>
            <Image source={image}/>
            <AppText>{title}</AppText>
            <AppText>{subTitle}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default ListItem;