import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Abnormal, Heart, Night } from "../assets/svg";
import { ItemCard } from "../components/itemCard";

const EventList = [
  {
    icon: <Abnormal />,
    title: "Abnormal Activity",
    time: "Today 20:28",
  },
  {
    icon: <Night />,
    title: "Up at night",
    time: "Yesterday 04:14",
  },
  {
    icon: <Heart />,
    title: "Heart rate spike",
    time: "Today 20:28",
  },
  {
    icon: <Abnormal />,
    title: "Abnormal Activity",
    time: "Today 20:28",
  },
  {
    icon: <Night />,
    title: "Up at night",
    time: "Yesterday 04:14",
  },
  {
    icon: <Night />,
    title: "Up at night",
    time: "Yesterday 04:14",
  },
];

export default function Events({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.heading}>
        <Text style={styles.gloria}>Gloria Thompson</Text>
        <Text style={styles.eve}>Events</Text>
      </View>
      <View style={styles.eventsContainer}>
        {EventList.map((item, index) => {
          return (
            <ItemCard
              key={index}
              icon={item.icon}
              title={item.title}
              time={item.time}
              onPress={() =>
                navigation.navigate("acknowledge", {
                  title: item.title,
                })
              }
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  abnormal: {
    color: "#343866",
  },
  today: {
    color: "#8F92B2",
    fontSize: 12,
  },
  eve: {
    color: "#343866",
  },
  abnorm: {
    marginLeft: 20,
  },
  heading: {
    alignItems: "center",
    height: 45,
  },
  eventsContainer: {
    flex: 1,
    backgroundColor: "#ECEEF9",
    width: "100%",
    paddingHorizontal: 20,
    // paddingTop: 20,
  },
  itemCont: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    height: 70,
    borderRadius: 6,
    borderColor: "#DDDDDD",
    alignItems: "center",
    paddingLeft: 15,
    marginTop: 17,
  },
  gloria: {
    color: "#8F92B2",
    fontSize: 12,
  },
});
