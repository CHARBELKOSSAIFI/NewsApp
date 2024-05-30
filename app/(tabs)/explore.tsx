// import { StyleSheet,View ,Text,Image, ImageBackground } from 'react-native';
// import { useLocalSearchParams } from 'expo-router';
// import tw from twrnc
// export default function TabTwoScreen() {
//   const params = useLocalSearchParams();
//   const { title,description,urlToImage } = params;

//   return (
//     <View style={styles.root}>
//       <Text style={styles.title}>
//         {title}
//       </Text>
//       <Text  style={styles.description}>
//         {description}
//       </Text>

//         {urlToImage && (
//         <Image
//           source={{ uri: urlToImage as string }}
//           style={styles.image}
//         />
//       )}

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   root:{
//     paddingHorizontal:20,
//     paddingVertical:40,
//     gap:20
//   },
//  title:{
//   color:"white",
//   fontSize:30
//  },
//  description:{
//   color:"white"
//  },
//  image: {
//   width: '100%',
//   height: 200,
//   borderRadius: 10,
// }
// });



import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import tw from 'twrnc';

export default function TabTwoScreen() {
  const params = useLocalSearchParams();
  const { title, description, urlToImage } = params;

  return (
    <View style={tw`px-5 py-10 space-y-5`}>
      <Text style={tw`text-white text-3xl`}>
        {title}
      </Text>
      <Text style={tw`text-white`}>
        {description}
      </Text>
      {urlToImage && (
        <Image
          source={{ uri: urlToImage as string }}
          style={tw`w-full h-48 rounded-lg`}
        />
      )}
    </View>
  );
}
