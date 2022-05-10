
/*- Default in every scene -*/
import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native"

/*- Components / Molecules -*/
import Footer from "../components/molecules/Footer";

export default class Search extends React.PureComponent {
	render() {
		return(
			<View>
				<Text>This is the search, very good</Text>
				<StatusBar style="auto" />
				<Footer navigation={this.props.navigation}></Footer>
			</View>
		)
	}
}
