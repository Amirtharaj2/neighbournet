import React, {useState, useCallback, useEffect} from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView, TouchableOpacity, Text, Image } from 'react-native';
import { GiftedChat, Send} from 'react-native-gifted-chat';

import AppText from '../components/AppText';
import Icon from '../components/Icon';
import { ListItemSeparator } from '../components/lists';
import colors from '../config/colors';

function ChatScreen(props) {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  function renderSend(props) {
    return (
        <Send
            {...props}
        >
            <View style={{marginRight: 10, marginBottom: 5}}>
                <Icon name="send" backgroundColor="#0E67B4" size={37}/>
            </View>
        </Send>
    );
  }

  return (
    <View style={styles.container}>
        <View style={styles.userContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>console.log("tapped")}>
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
            <View style={{
                alignSelf: "center",
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 2
            }}>
                <AppText fontSize={24} >{}</AppText>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>console.log("tapped")}>
                <Text style={styles.text}>Details</Text>
            </TouchableOpacity>
        </View>
        <GiftedChat
         {
            ...Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
         }
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: 1,
        }}
        renderSend={renderSend}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    userContainer: {
        paddingTop: 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light
    },
    button: {
        padding: 2,
        marginVertical: 15
    },
    text:  {
      fontSize: 20,
      fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      fontStyle: "italic",
      textAlign: "auto",
      color: colors.primary
    },
})

export default ChatScreen;