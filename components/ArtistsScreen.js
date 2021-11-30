import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button } from "react-native";

const DATA = [
  {
    title: "Rappers",
    data: ["Robert Denero", "Travis Michael", "Trizzy tre"]
  },
  {
    title: "Singers",
    data: ["Lil Dave", "Poor Brian", "Ty the Maker"]
  },
  {
    title: "bands",
    data: ["21 Plane", "Imagine Phoenix", "Dropout boys"]
  },
  {
    title: "other",
    data: ["Doja Cow", "Canye North"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function ArtistsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});


export default ArtistsScreen;