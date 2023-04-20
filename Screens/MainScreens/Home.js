import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { ProfileIcon, PostsIcon, CreateIcon } from "../../Components/svg";

const MainTab = createBottomTabNavigator();

const Home = ({ route }) => {
  return (
    <MainTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContainer,
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <PostsIcon focused={focused} />,
        }}
      />
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => <CreateIcon focused={focused} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 83,
    boxShadow: "0px -0.5px 0px rgba(0, 0, 0, 0.3)",
  },
});

export default Home;
