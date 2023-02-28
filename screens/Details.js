import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";

const Details = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "DETAILS",
    });
  });

  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
  const email = route.params.email;
  const username = route.params.username;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name : {firstName + " " + lastName}</Text>
        <Text style={styles.text}>Email Id : {email}</Text>
        <Text style={styles.text}>Username : {username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    height: "30%",
    width: "98%",
    borderWidth: 5,
    borderColor: "#6200ff",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 22,
  },
});
export default Details;
