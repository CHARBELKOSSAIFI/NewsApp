// import queryClient from '@/src/queryClient';
// import axios from 'axios';
// import { Link } from 'expo-router';
// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
//   Pressable,
// } from 'react-native';
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
// import tw from 'twrnc';

// type ItemProps = {
//   title: string,
//   author:string,
//   description:string,
//   urlToImage:string
// tw:string
// };

// const Item = ({title, author,description,urlToImage }: ItemProps) => (
//   <View style={styles.item}>

//   <Link
//   href={{
//     pathname: "/explore",
//     params: { title,description,urlToImage }
//   }}>
//     <Text style={styles.title}>{title}</Text>
//     {/* <Text style={styles.author}>{author}</Text> */}
//   </Link>
//   </View>

// );

// const App = () => {
//   const { error, data, isFetching } = useQuery({ queryKey: ['news'], queryFn:() => axios
// .get('https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey='+process.env.EXPO_PUBLIC_API_KEY)
// .then((res)=>res.data),
// })
// //console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",process.env.EXPO_PUBLIC_API_KEY);
//   return (

//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={data?.articles ||[]}
//         renderItem={({item}) => <Item {...item} />}
//         // keyExtractor={item => item.id}
//       />

//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 30,
//     color:'black'
//   },
//   // author:{
//   //   fontSize: 20,

//   // }
// });

// export default App;








import axios from 'axios';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, FlatList, Text, StatusBar } from 'react-native';
import { QueryClientProvider, useQuery } from 'react-query';
import Constants from 'expo-constants';
import tw from 'twrnc'
type ItemProps = {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
};

const Item = ({ title, author, description, urlToImage }: ItemProps) => (
  <View style={tw`bg-pink-200 p-5 my-2 mx-4`}>
    <Link
      href={{
        pathname: "/explore",
        params: { title, description, urlToImage }
      }}
    >
      <Text style={tw`text-black text-3xl`}>{title}</Text>
    </Link>
  </View>
);

const App = () => {
  const { error, data, isFetching } = useQuery({
    queryKey: ['news'],
    queryFn: () => axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey='+process.env.EXPO_PUBLIC_API_KEY)
      .then((res) => res.data),
  });

  // if (isFetching) return <Text>Loading...</Text>;
  // if (error) return <Text>Error loading news</Text>;

  return (
    <SafeAreaView style={tw`flex-1 mt-10`}>
      <FlatList
        data={data?.articles || []}
        renderItem={({ item }) => <Item {...item} />}
        //keyExtractor={(item) => item.url}
      />
    </SafeAreaView>
  );
};

export default App;
