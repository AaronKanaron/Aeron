import React from "react";
import { View } from "react-native";
import { MCIcons } from "../atoms/Icon"

import { components } from "../../Style";
export default class Footer extends React.PureComponent {
	render() {
		return(
			<View style={components.footer.body}>
				<MCIcons size={32} color={"#8dbbff"} title={"Home"} name="home" onPress={()=>this.props.navigation.navigate("Home")} ></MCIcons>
				<MCIcons size={32} color={"#8dbbff"} title={"Search"} name="compass" onPress={()=>this.props.navigation.navigate("Search")}></MCIcons>
				<MCIcons size={32} color={"#8dbbff"} title={"Search"} name="heart" onPress={()=>this.props.navigation.navigate("Search")}></MCIcons>
				<MCIcons size={32} color={"#8dbbff"} title={"Search"} name="account" onPress={()=>this.props.navigation.navigate("Search")}></MCIcons>
			</View>
		)
	}
}


