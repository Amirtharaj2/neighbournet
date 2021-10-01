import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';

function ListDetailScreen({image}) {
    return (
        <View >
            <Image style={styles.container} source={image}/>
            <ListItem image={require('../assets/profile.jpg')} title='Amirtharaj' subTitle='Hi'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500
    }
})

export default ListDetailScreen;