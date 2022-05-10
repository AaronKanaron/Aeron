import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native"
import Footer from "../components/molecules/Footer";

export default class Home extends React.PureComponent {
	render() {
		return(
			<SafeAreaView>
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />
				<Footer navigation={this.props.navigation}></Footer>
			</SafeAreaView>
		)
	}
}
