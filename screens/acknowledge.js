import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Back, Heart, Night, Abnormal } from "../assets/svg";

export default function Acknowledge({ navigation, route }) {
  const { title } = route.params;
  const icon = getIcon(title);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.topBox}>
        <View style={styles.all}>
          <TouchableOpacity onPress={() => navigation.navigate("events")}>
            <Back style={styles.back} />
          </TouchableOpacity>
          <View style={styles.glovent}>
            <Text style={styles.gloria}>Gloria Thompson</Text>
            <Text style={styles.eve}>Event</Text>
          </View>
        </View>
        {icon}
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.activity}>{title}</Text>
        <Text style={styles.abnormalities}>
          There have been abnormalities in their usual behaviour.
        </Text>
        <TouchableOpacity style={styles.visualise}>
          <Text style={styles.visual}>Visualise</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ack}>
          <Text style={styles.ledge}>Acknowledge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getIcon = (title) => {
  switch (title) {
    case "Abnormal Activity":
      return (
        <Abnormal style={styles.normal} color="white" width={80} height={80} />
      );

    case "Up at night":
      return (
        <Night style={styles.normal} color="white" width={80} height={80} />
      );

    case "Heart rate spike":
      return (
        <Heart style={styles.normal} color="white" width={80} height={80} />
      );

    default:
      return null;
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  all: {
    flexDirection: "row",
    marginBottom: 30,
  },
  glovent: {
    marginLeft: 90,
    alignItems: "center",
    // marginBottom: 10,
  },
  normal: {
    alignSelf: "center",
    marginBottom: 30,
  },
  ledge: {
    color: "#343866",
  },
  visual: {
    color: "white",
  },
  abnormalities: {
    textAlign: "center",
    fontSize: 14,
    color: "#343866",
  },
  activity: {
    fontSize: 22,
    color: "#343866",
    fontWeight: "600",
    marginBottom: 10,
    alignSelf: "center",
  },
  visualise: {
    backgroundColor: "#6D2077",
    width: "100%",
    borderRadius: 4,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginBottom: 20,
  },
  ack: {
    backgroundColor: "#E1E2F0",
    width: "100%",
    borderRadius: 4,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBox: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  ab: {
    borderWidth: 2,
    borderColor: "white",
    borderStyle: "solid",
  },
  topBox: {
    backgroundColor: "#00AEC7",
    width: "100%",
    // height: 180,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  gloria: {
    color: "white",
    fontSize: 11,
  },
  eve: {
    color: "white",
    fontSize: 15,
  },
});
