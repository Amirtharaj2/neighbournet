import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity , Text, Platform} from "react-native";

import Screen from "../components/Screen";
import {ListItem, ListItemSeparator} from "../components/lists"
import colors from "../config/colors";
import AppText from "../components/AppText";
import Icon from "../components/Icon";
import AppTextInput from "../components/AppTextInput";


const initialMessages = [
  // {
  //   id: 1,
  //   title: "NeighbourNet",
  //   description: "You: How to monitor...",
  //   image: require("../assets/NeighbourNet-logo.jpeg"),
  //   createdAt
  // },
  {
    id: 2,
    title: "Amirtharaj",
    description: "Hi there.. I wanted to check whethere or not editing the code in Apptext helps",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 3,
    title: "Daksh",
    description: "Hi.",
    image: require("../assets/daksh.jpg"),
  },
  {
    id: 4,
    title: "Aditya",
    description: "Hello.",
    image: require("../assets/User.png"),
  },
  {
    id: 5,
    title: "Lakshay",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
  {
    id: 6,
    title: "Karthick",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
  {
    id: 7,
    title: "Ganesh Kumar",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
  {
    id: 8,
    title: "Krishna",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
  {
    id: 9,
    title: "Praveen",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
  {
    id: 10,
    title: "Pravallika",
    description: "Joined Neighbournet.",
    image: require("../assets/User.png"),
  },
];

function PaymentScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <Screen>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>console.log("tapped")}>
          <Text style={styles.text}>$ Add </Text>
        </TouchableOpacity>
        <View style={{
          alignSelf: "center",
          // marginLeft: 10,
          // marginRight: 10,
          paddingLeft: 10,
          paddingRight: 10,
          width: "60%",
          marginBottom: 2
        }}>
          <AppText style={styles.apptext}>NeighbourPay</AppText>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>console.log("tapped")}>
            <Text style={styles.text}>+ New </Text>
        </TouchableOpacity>
      </View>
      <AppTextInput icon= "account-search" placeholder="Search Profiles"></AppTextInput>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (  
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={()=> {console.log('Tapped')}}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={false}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 8,
    // marginRight: 8,
    // marginLeft: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"

  },
  button: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    borderRadius: 25,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    marginVertical: 15 },
  text:  {
    color:colors.medium,
    fontWeight: "bold",
  },

  apptext: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    textAlign: "auto",
    color: colors.black
  },

});

export default PaymentScreen;
