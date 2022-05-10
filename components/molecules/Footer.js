import React from "react";
import { View, Button } from "react-native";

export default class Footer extends React.PureComponent {
	render() {
		return(
			<View>
				<Button title={"Home"} onPress={()=>this.props.navigation.navigate("Home")}></Button>
				<Button title={"Search"} onPress={()=>this.props.navigation.navigate("Search")}></Button>
			</View>
		)
	}
}


