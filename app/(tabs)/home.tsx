import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { getAllPosts } from '@/lib/appwrite';
import { StatusBar } from 'expo-status-bar';
import VideoCard from '@/components/VideoCard';

interface PostsProps {
  $id: string;
  id: string;
  title: string;
  thumbnail: string;
  prompt: string;
  video: string;
  creator: {
    username: any;
    avatar: any;
  };
};

const Home = () => {
  const [data, setData] = useState<PostsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = (await getAllPosts()) as unknown as PostsProps[];
      setData(response);
    } catch (err: any) {
      Alert.alert('Error', err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    setRefreshing(false);
    fetchData();
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={data}
        // data={[] as { id: number }[]}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}

        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>Welcome Back</Text>
                <Text className='text-2xl font-psemibold text-white'>Adithya B R</Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>

            <SearchInput placeholder='Search for a video topic' />

            <View className='w-full flex-1 pt-5 pb-4'>
              <Text className='text-gray-100 text-lg font-pregular mb-3'>
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Home