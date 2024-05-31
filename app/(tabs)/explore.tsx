
import { View, Text, Image , ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tw from 'twrnc';
export default function TabTwoScreen() {
  const params = useLocalSearchParams();
  const { title, description, urlToImage } = params;

  return (
    <View style={tw`px-5 py-10 `}>
      <Text style={tw`text-white text-2xl pt-5 font-bold`}>
        {title}
      </Text>
      <Text style={tw`text-white mt-5`}>
        {description}
      </Text>

      {urlToImage && (
        <Image
          source={{ uri: urlToImage as string }}
          style={tw`w-full h-48 rounded-lg mt-10`}
        />
      )}
    </View>
  );
}
