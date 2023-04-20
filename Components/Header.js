import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { ArrowLeftIcon } from "./svg/ArrowLeftIcon.jsx";
import { LogOutIcon } from "./svg/LogOutIcon.jsx";

export const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {title !== "Posts" && (
        <TouchableOpacity
          style={styles.goBackButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Posts")}
        >
          <ArrowLeftIcon />
        </TouchableOpacity>
      )}

      <Text style={styles.headerTitle}>{title}</Text>

      {title === "Posts" && (
        <TouchableOpacity
          style={styles.logOutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Login")}
        >
          <LogOutIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    height: 88,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  goBackButton: {
    position: "absolute",
    left: 16,
    bottom: 10,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  logOutButton: {
    position: "absolute",
    right: 16,
    bottom: 10,
  },
});

Header.propTypes = {
  title: PropTypes.string,
};
