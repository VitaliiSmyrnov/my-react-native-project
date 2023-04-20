import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";

import { Header } from "../../Components/Header";
import { CameraIcon, MapIcon, TrashIcon } from "../../Components/svg";

const initialState = {
  photo: null,
  title: null,
  location: null,
};

const CreatePostsScreen = () => {
  const [state, setState] = useState(initialState);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState({});

  const { photo, title, location } = state;

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
  };

  useEffect(() => {
    if (photo && title && location) {
      setIsActiveBtn(true);
    } else setIsActiveBtn(false);
  }, [photo, title, location]);

  const handleChangeInput = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitForm = () => {
    keyboardHide();
    setState(initialState);
    navigation.navigate("Posts");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Header title="Create post" />
        <ScrollView>
          <View style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                {!photo && (
                  <>
                    <TouchableOpacity
                      style={styles.cameraBox}
                      activeOpacity={0.8}
                    >
                      <View style={styles.cameraIcon}>
                        <CameraIcon />
                      </View>
                    </TouchableOpacity>
                    <Text style={{ ...styles.textStyle, color: "#BDBDBD" }}>
                      Download photo
                    </Text>
                  </>
                )}

                {photo && (
                  <>
                    <TouchableOpacity
                      style={styles.cameraBox}
                      activeOpacity={0.8}
                    >
                      <Image
                        style={{ height: 240, width: "100%", borderRadius: 8 }}
                        source={{ uri: photo }}
                      />
                      <View style={styles.cameraIcon}>
                        <CameraIcon addedPhoto="true" />
                      </View>
                    </TouchableOpacity>
                    <Text style={{ ...styles.textStyle, color: "#BDBDBD" }}>
                      Edit photo
                    </Text>
                  </>
                )}
              </View>

              <View style={{ paddingTop: 32 }}>
                <TextInput
                  style={{
                    ...styles.textStyle,
                    ...styles.inputStyle,
                    marginBottom: 16,
                    borderBottomColor: inputOnFocus.title
                      ? "#FF6C00"
                      : "#BDBDBD",
                  }}
                  keyboardType="default"
                  placeholder="Name..."
                  placeholderTextColor="#BDBDBD"
                  value={title}
                  onFocus={() => onFocus("title")}
                  onBlur={onBlur}
                  onChangeText={(value) => handleChangeInput("title", value)}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: inputOnFocus.location
                      ? "#FF6C00"
                      : "#BDBDBD",
                  }}
                >
                  <MapIcon style={{ position: "absolute" }} />
                  <TextInput
                    style={{
                      ...styles.textStyle,
                      height: 50,
                      paddingLeft: 4,
                    }}
                    keyboardType="default"
                    placeholder="Location..."
                    placeholderTextColor="#BDBDBD"
                    value={location}
                    onFocus={() => onFocus("location")}
                    onBlur={onBlur}
                    onChangeText={(value) =>
                      handleChangeInput("location", value)
                    }
                  />
                </View>
              </View>
            </KeyboardAvoidingView>

            {!isShowKeyboard && (
              <TouchableOpacity
                style={{
                  ...styles.button,
                  backgroundColor: isActiveBtn ? "#FF6C00" : "#F6F6F6",
                }}
                activeOpacity={0.8}
                disabled={isActiveBtn ? false : true}
                onPress={onSubmitForm}
              >
                <Text
                  style={{
                    ...styles.textStyle,
                    color: isActiveBtn ? "#fff" : "#BDBDBD",
                  }}
                >
                  Publish
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>

        {!isShowKeyboard && (
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 34,
              alignSelf: "center",
            }}
            onPress={() => setValue(initialValue)}
            disabled={!isActiveBtn}
          >
            <TrashIcon isActive={isActiveBtn} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cameraBox: {
    height: 240,
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  cameraIcon: {
    position: "absolute",
    top: "40%",
    left: "42%",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  inputStyle: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginTop: 32,
    borderRadius: 100,
  },
});

export default CreatePostsScreen;
