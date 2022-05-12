import { StyleSheet } from "react-native";

const variables = {
	colors: {
		//background
		background: "#23293d",
		//text
		text: "#000000",
		//primary
		secondary: "#00a8ff",
	},
}

const defaults = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: variables.colors.background,
	}
})

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
			justifyContent: "space-around",
			alignItems: "center",

			height: 82,
			width: "100%",
			position: "absolute",
			bottom: 0,

		}
	}),
	header: StyleSheet.create({
		body: {
			backgroundColor: "#3cc",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},


		text: {
			fontSize: 20,
			fontFamily: "Nunito",
		},
		profile: {
			width: 32,
			aspectRatio: 1,
			borderRadius: 2000,
		}
	}),
}


export {
	defaults,
	scenes,
	components,
}