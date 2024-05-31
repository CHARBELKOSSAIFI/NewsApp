
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';
import { useQuery } from 'react-query';
import tw from 'twrnc';

type ItemProps = {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
};

const Item = ({ title, description, urlToImage }: ItemProps) => (
  <View style={tw`bg-pink-200 p-5 my-2 mx-4`}>
    <Link
      href={{
        pathname: "/explore",
        params: { title, description, urlToImage }
      }}
    >
      <Text style={tw`text-black text-2xl`}>{title}</Text>
    </Link>
  </View>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { error, data, isFetching } = useQuery({

    queryKey: ['news'],
    queryFn: () => axios
      .get('https://newsapi.org/v2/everything?q=tesla&from=2024-04-30&sortBy=publishedAt&apiKey=' + process.env.EXPO_PUBLIC_API_KEY)
      .then((res) => res.data),
  });
    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isFetching) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="red" />
        <Text style={tw`text-center mt-5 text-lg text-red-500`}>LOADING...</Text>
      </View>
    );
  }

  if (error) {
    return <Text style={tw`text-center mt-10 text-red-500`}>Error loading news</Text>;
  }

  return (
    <SafeAreaView style={tw`flex-1 mt-10`}>
      <FlatList
        data={data?.articles || []}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
