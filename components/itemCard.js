import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const ItemCard = ({ icon, title, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemCont} onPress={onPress}>
      {icon}
      <View style={styles.abnorm}>
        <Text style={styles.abnormal}>{title}</Text>
        <Text style={styles.today}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  abnorm: {
    marginLeft: 20,
  },
  abnormal: {
    color: "#343866",
  },
  today: {
    color: "#8F92B2",
    fontSize: 12,
  },
});
