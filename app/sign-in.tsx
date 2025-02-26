import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};

	return (
		<SafeAreaView className="bg-white h-full">
			<ScrollView contentContainerClassName="h-full">
				<Image
					source={images.onboarding}
					className="w-full h-4/6"
					resizeMode="contain"
				/>
				<View className="px-10">
					<Text className="text-center text-black-200 text-base uppercase font-rubik">
						Welcome to Eden
					</Text>
					<Text className="text-center text-black-300 font-rubik-bold mt-2 text-3xl">
						Let's get you closer to {"\n"}
						<Text className="text-primary-300">Your Ideal Home</Text>
					</Text>
          <Text className="text-center mt-12 text-lg text-black-200 font-rubik">
            Login to Eden with Google
            <TouchableOpacity onPress={handleLogin} className="shadow-zinc-300 rounded-full w-full bg-white py-4 mt-5 shadow-md">
              <View className="items-center justify-center flex flex-row">
                <Image source={icons.google} resizeMode="contain" className="w-5 h-5" />
                <Text className="text-lg font-rubik-medium ml-2 text-black-300">Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
