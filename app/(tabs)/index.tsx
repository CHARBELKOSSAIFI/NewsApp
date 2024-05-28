import queryClient from '@/src/queryClient';
import axios from 'axios';
import { Link } from 'expo-router';
import React from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';



type ItemProps = {title: string,author:string,description:string};



const Item = ({title, author,description }: ItemProps) => (
  <View style={styles.item}>

  <Link
  href={{
    pathname: "/explore",
    params: { title,description }
  }}>
    <Text style={styles.title}>{title}</Text>
    <Text>{author}</Text>
  </Link>
  </View>

);


const App = () => {
  const { error, data, isFetching } = useQuery({ queryKey: ['news'], queryFn:() => axios
.get('https://newsapi.org/v2/everything?q=tesla&from=2024-04-28&sortBy=publishedAt&apiKey='+process.env.EXPO_PUBLIC_API_KEY)
.then((res)=>res.data),
})
console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",process.env.EXPO_PUBLIC_API_KEY);
  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.articles ||[]}
        renderItem={({item}) => <Item {...item} />}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;