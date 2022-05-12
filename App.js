import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "@use-expo/font";

/*- Scenes -*/
import Home from "./scenes/Home";
import Search from "./scenes/Search";

/*- Create the stack navigator -*/
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Nunito": require("./assets/fonts/Nunito-Regular.ttf"),
		"NunitoMedium": require("./assets/fonts/Nunito-Medium.ttf"),
	});

	if (!fontsLoaded) return null;

	return(
		<React.Fragment>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false, }}>
					<Stack.Screen name="Home" component={Home}/>
					<Stack.Screen name="Search" component={Search} />
				</Stack.Navigator>
			</NavigationContainer>
		</React.Fragment>
	)
}



/* 
 *To Do:

 - Add styling + icons to the footer
 - Add the header
 - Add functional search bar in array (perhaps usage of Spotify API to search)
 - Top Songs / Playlists in home screen

 ?= Frontend Account Login =
 - Add login scene
 - Handle Spotify authentication requests and responses
 - Add user data to local storage
 - Display Users data (such as Favored Songs, Playlists incl. and favorable Owned) in home screen
 - Add functionality to add songs to favorites
 - Get user or playlist data from Spotify API to determine specifics (Beat, Tempo, Instrumentalism, etc.)

 */