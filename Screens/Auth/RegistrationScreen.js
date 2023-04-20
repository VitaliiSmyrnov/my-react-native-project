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
import { AddUserPhotoIcon } from "../../Components/svg/AddUserPhotoIcon";

const { width } = Dimensions.get("window");

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState({});

  const onFocus = (value) => {
    setInputOnFocus({ [value]: true });
    setIsShowKeyboard(true);
    console.log(value);
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
            height: isShowKeyboard ? 374 : 549,
          }}
        >
          <View
            style={{
              ...styles.userPhotoWrapper,
              bottom: isShowKeyboard ? 314 : 489,
            }}
          >
            <TouchableOpacity activeOpacity={0.8} style={styles.addPhotoBtn}>
              <AddUserPhotoIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Registration</Text>
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
                placeholder="Login"
                placeholderTextColor="#BDBDBD"
                style={{
                  ...styles.input,
                  borderColor: inputOnFocus.login ? "#FF6C00" : "#E8E8E8",
                }}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
                onFocus={() => onFocus("login")}
                onBlur={onBlur}
              />
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
                <Text style={styles.buttonTitle}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.question}>
                  Already have an account? Sign in
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  registrationWrapper: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    height: 549,
    width,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userPhotoWrapper: {
    position: "absolute",
    bottom: 489,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addPhotoBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    letterSpacing: 0.01,
    lineHeight: 35,
    color: "#212121",
    paddingTop: 92,
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
    paddingRight: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
