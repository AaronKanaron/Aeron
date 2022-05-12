import React from "react";
import { Image, View, Text } from "react-native";
import { MCIcons } from "../atoms/Icon"


import { components } from "../../Style";

export default class Header extends React.PureComponent {
	render() {
		return (
			<View style={components.header.body}>
				<Image style={components.header.profile} source={{uri : "https://picsum.photos/200" }} />
				<Text style={components.header.text}>Home</Text>
				<MCIcons size={32} name={"magnify"}></MCIcons>
			</View>
		)
	}
}