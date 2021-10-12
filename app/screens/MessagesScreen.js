import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {ListItem, ListItemSeparator, ListItemDeleteAction} from "../components/lists"


const initialMessages = [
  {
    id: 1,
    title: "NeighbourNet",
    description: "You: How to monitor...",
    image: require("../assets/NeighbourNet-logo.jpeg"),
  },
  {
    id: 2,
    title: "Amirtharaj",
    description: "Hi there.",
    image: require("../assets/profile.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (  
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=> {console.log('Tapped')}}
            renderRightActions={()=> <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        // onRefresh={() => {
        //   setMessages([
        //     {
        //       id: 2,
        //       title: "T2",
        //       description: "D2",
        //       image: require("../assets/profile.jpg"),
        //     },
        //   ]);
        // }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
