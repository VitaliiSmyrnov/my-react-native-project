import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { Header } from "../../Components/Header";

const PostsScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <Header title="Posts" />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.userImg} source={{ uri: null }} />
          <View>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontSize: 15,
    lineHeight: 17,
    color: "#212121",
    marginBottom: 4,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 15,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;
