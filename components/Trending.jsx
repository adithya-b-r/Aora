import { FlatList, TouchableOpacity, ImageBackground, Image, View, Alert } from 'react-native';
import React, { useState, useCallback } from 'react';
import * as Animatable from 'react-native-animatable';
import { Video, ResizeMode } from 'expo-av';
import { icons } from '@/constants';

const zoomIn = {
  0: { scale: 0.9 },
  1: { scale: 1.1 },
};

const zoomOut = {
  0: { scale: 1.1 },
  1: { scale: 0.9 },
};

const TrendingItem = ({ activeId, item }) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeId === item.$id ? zoomIn : zoomOut}
      duration={500}
      easing="ease-in"
    >
      {play ? (
        <View className="w-52 h-72 rounded-[35px] mt-3 overflow-hidden">
          <Video
            source={{ uri: item.video }}
            style={{ width: '100%', height: '100%' }}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            // isLooping
            useNativeControls
            onError={() => setPlay(false)}

            onPlaybackStatusUpdate={(status) => {
              if (status.error) {
                Alert.alert("Error", "An error occurred when playing the video")
                setPlay(false)
              }
              if (status.didJustFinish) {
                setPlay(false);
                console.log("Video Completed Playing.");
              }
            }}
          />
        </View>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.thumbnail }}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          >
            <View className="flex-1 justify-center items-center">
              <Image
                source={icons.play}
                className="w-12 h-12"
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts = [] }) => {
  const [activeId, setActiveId] = useState(posts[1]);

  const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveId(viewableItems[0].key);
    }
  }, []);

  if (!posts.length) {
    return null;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeId={activeId} item={item} />
      )}
      onViewableItemsChanged={handleViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}

      contentOffset={{ x: 170 }}

      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 4 }}
      initialScrollIndex={0}
    />
  );
};

export default Trending;