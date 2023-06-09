import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const { width } = Dimensions.get("window");

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState({});

  const onFocus = (value) => {
    setInputOnFocus({ [value]: true });
    setIsShowKeyboard(true);
  };

  const onBlur = () => {
    setInputOnFocus({});
    setIsShowKeyboard(false);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const onSubmit = () => {
    keyboardHide();
    console.log(state);
    navigation.navigate("Home");
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/Photo-BG.jpg")}
          style={styles.bgImage}
        />
        <View
          style={{
            ...styles.registrationWrapper,
            height: isShowKeyboard ? 248 : 489,
          }}
        >
          <Text style={styles.title}>Sign in</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyboard ? 32 : 43,
              }}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="#BDBDBD"
                style={{
                  ...styles.input,
                  borderColor: inputOnFocus.email ? "#FF6C00" : "#E8E8E8",
                }}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                onFocus={() => onFocus("email")}
                onBlur={onBlur}
              />
              <View>
                <TextInput
                  secureTextEntry={!isPasswordVisible}
                  placeholder="Password"
                  placeholderTextColor="#BDBDBD"
                  style={{
                    ...styles.input,
                    borderColor: inputOnFocus.password ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  onFocus={() => onFocus("password")}
                  onBlur={onBlur}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={togglePasswordVisibility}
                  style={styles.showBtn}
                >
                  <Text style={styles.showBtnText}>
                    {isPasswordVisible ? "Hide" : "Show"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          {!isShowKeyboard && (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={onSubmit}
              >
                <Text style={styles.buttonTitle}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Registration")}
              >
                <Text style={styles.question}>
                  Don't have an account? Register
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    right: 0,
    resizeMode: "cover",
    width: "100%",
  },
  registrationWrapper: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: 489,
    width,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35,
    color: "#212121",
    paddingTop: 32,
    marginBottom: 16,
  },
  form: {
    width,
    paddingHorizontal: 16,
    marginBottom: 43,
  },
  input: {
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  showBtn: {
    position: "absolute",
    right: 16,
    top: 31,
  },
  showBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 19,
    color: "#1B4371",
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  question: {
    marginTop: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default LoginScreen;
