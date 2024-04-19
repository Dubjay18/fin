import {
	View,
	Text,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useAssets } from "expo-asset";
import { Link, useRouter } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import {useSignUp} from "@clerk/clerk-expo";

const Page = () => {
	const [countryCode, setCountryCode] = useState("+234");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;
	const router = useRouter();
	const { signUp } = useSignUp();
	const onSignup = async () => {
		const fullPhoneNumber = `${countryCode}${phoneNumber}`;
		console.log(email)

		try {
		  await signUp!.create({
			emailAddress: email,

		  });
			signUp!.prepareEmailAddressVerification({ strategy: "email_code" });

		  router.push({ pathname: '/verify/[email]', params: { email: email } });
		} catch (error) {
		  console.error('Error signing up:', error);
			console.error(JSON.stringify(error, null, 2));
		}
	};

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={keyboardVerticalOffset}
		>
			<View style={defaultStyles.container}>
				<Text style={defaultStyles.header}>Let's get started!</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number. We will send you a confirmation code there
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={[
							styles.input,
							{
								flex: 0.2,
							},
						]}
						placeholder="Country code"
						placeholderTextColor={Colors.gray}
						value={countryCode}
					/>
					<TextInput
						style={[styles.input, { flex: 1 }]}
						placeholder="email"
						placeholderTextColor={Colors.gray}

						value={email}
						onChangeText={setEmail}
					/>
				</View>

				<Link
					href={"/login"}
					replace
					asChild
				>
					<TouchableOpacity>
						<Text style={defaultStyles.textLink}>
							Already have an account? Log in
						</Text>
					</TouchableOpacity>
				</Link>

				<View style={{ flex: 1 }} />

				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						phoneNumber !== "" ? styles.enabled : styles.disabled,
						{ marginBottom: 20 },
					]}
					onPress={onSignup}
				>
					<Text style={defaultStyles.buttonText}>Sign up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 40,
		flexDirection: "row",
	},
	input: {
		backgroundColor: Colors.lightGray,
		padding: 20,
		borderRadius: 16,
		fontSize: 20,
		marginRight: 10,
	},
	enabled: {
		backgroundColor: Colors.primary,
	},
	disabled: {
		backgroundColor: Colors.primaryMuted,
	},
});
export default Page;
