import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogOutIcon, RemoveUserPhotoIcon } from "../../Components/svg";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <Image
        style={styles.bgImage}
        source={require("../../assets/images/Photo-BG.jpg")}
      />
      <View style={styles.wrapper}>
        <View style={styles.userPhotoWrapper}>
          <TouchableOpacity activeOpacity={0.8} style={styles.photoBtn}>
            <RemoveUserPhotoIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.logOutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <LogOutIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Natali Romanova</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
    top: 0,
    right: 0,
    resizeMode: "cover",
    width: "100%",
  },
  wrapper: {
    flex: 0.75,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  userPhotoWrapper: {
    position: "absolute",
    top: -60,
    left: 128,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  photoBtn: {
    position: "absolute",
    bottom: 14,
    right: -17,
  },
  logOutButton: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  title: {
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    paddingVertical: 92,
    letterSpacing: 0.2,
    lineHeight: 35,
  },
});

export default ProfileScreen;
