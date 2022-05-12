/*- Default in every scene -*/
import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native"

/*- Components / Molecules -*/
import Footer from "../components/molecules/Footer";
import { defaults } from "../Style";

export default class Search extends React.PureComponent {
	render() {
		return(
			<React.Fragment>
				<SafeAreaView style={defaults.container}>
					<Text>This is the search!</Text>
					<StatusBar style="auto" />
				</SafeAreaView>
				<Footer navigation={this.props.navigation}></Footer>
			</React.Fragment>
		)
	}
}
