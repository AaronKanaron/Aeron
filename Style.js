import { StyleSheet } from "react-native";

const variables = {
	colors: {
		//background
		background: "#fafafa",
		//text
		text: "#000000",
		//primary
		secondary: "#00a8ff",
	},
}

const scenes = {
	home: StyleSheet.create({

	}),

	search: StyleSheet.create({
	}),
}

const components = {
	footer: StyleSheet.create({
		body: {
			backgroundColor: variables.colors.background,
			flexDirection: "row",
			justifyContent: "space-between",
		}
	}),
}


export {
	scenes,
	components,
}