import { StyleSheet, Text, TextInput, Pressable, View } from "react-native";
import { useLayoutEffect, useState } from "react";
import { Alert } from "react-native";

const Home = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "SIGNUP",
    });
  });

  const pressHandler = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      Alert.alert("Alert", "Please Fill All the Fields", [
        {
          text: "OK",
          style: "cancel",
        },
      ]);
      return;
    }
    navigation.navigate("Details", {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
    });
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.group}>
        <Text> Enter Full Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder={"First Name"}
          onChangeText={(text) => setFirstName(text)}
          autoCapitalize={"words"}
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder={"Last Name"}
          onChangeText={(text) => setLastName(text)}
          autoCapitalize={"words"}
        />
      </View>
      <View style={styles.group}>
        <Text> Enter Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder={"Email"}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.group}>
        <Text> Enter Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={"Username"}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={"none"}
        />
      </View>
      <View style={styles.group}>
        <Text> Enter Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={pressHandler}
        android_ripple={{ color: "#cccccca5" }}
      >
        <View>
          <Text style={{ color: "#ffffff" }}>Sign Up</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
    marginTop: "20%",
    padding: 10,
  },
  input: {
    height: 40,
    width: "100%",
    marginVertical: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#6200ff",
    borderRadius: 10,
  },
  group: {
    padding: 6,
  },
  button: {
    padding: 4,
    margin: 4,
    marginTop: "10%",
    borderRadius: 8,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6200ff",
  },
});
export default Home;
