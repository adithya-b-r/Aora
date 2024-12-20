import { View, Text, FlatList } from 'react-native'
import React from 'react'

interface LatestPostsProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    prompt: string;
    video: string;
    creator: {
      username: any;
      avatar: any;
    };
  }
}

const Trending = (posts: LatestPostsProps[]) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.video.id}
      renderItem={({item}) => (
        <Text className='text-3xl text-white'>{item.video.id}</Text>
      )}
      horizontal
    />
  )
}

export default Trending