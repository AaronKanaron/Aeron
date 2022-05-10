import React from "react";

import { default as IonIconsLib } from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

/*
	Size: The size of the icon, Default should be used for most cases.
	Color: The color of the icon
	aOpc: The opacity of the icon when active (pressed).
*/
const Default = { size: 24, color: "#000", aOpc:0.75 };

/* 
 This icon is preferable amongs the others (singleton reasons).
 ! - Has not been tested if page-swapping is supported, aswell as if the icon is rendered correctly.
 * - <Icon name="name" size={size} color={color} />
*/
export class IonIcons extends React.PureComponent{
	constructor(props){
		super(props);
		this.name = this.props.name
	}
	
	render(){
		<TouchableOpacity activeOpacity={Default.aOpc} onPress={()=>this.props.onPress && this.props.onPress()}>
			<IonIconsLib size={Default.size} color={Default.color} {...this.props} name={this.name} />
		</TouchableOpacity>
	}
}