import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async() => {
    setRefreshing(true);
    setRefreshing(false);
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[] as { id: number }[]}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <Text className='text-3xl text-white'>{item?.id}</Text>
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

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState 
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home