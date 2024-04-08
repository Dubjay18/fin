import { View, Text } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";

const Page = () => {
	const [assets] = useAssets([
		require("../assets/fonts/SpaceMono-Regular.ttf"),
	]);
	return (
		<View>
			<Text>Page</Text>
		</View>
	);
};

export default Page;
