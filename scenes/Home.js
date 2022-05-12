import React from "react";
import { SafeAreaView, Text, StatusBar } from "react-native"
import Footer from "../components/molecules/Footer";
import Header from "../components/molecules/Header";

//styling
import { defaults } from "../Style";

export default class Home extends React.PureComponent {
	render() {
		return(
			<React.Fragment>
				<SafeAreaView style={defaults.container}>
					<Header navigation={this.props.navigation}></Header>
					<Text>Open up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</SafeAreaView>
				
				<Footer navigation={this.props.navigation}></Footer>
			</React.Fragment>
		)
	}
}
