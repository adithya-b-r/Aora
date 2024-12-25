import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { icons } from '@/constants';

const VideoCard = ({ video: { id, title, thumbnail, prompt, video, creator: { username, avatar } } }) => {
  const [play, setPlay] = useState(false);
  const [screen, setScreen] = useState(0);

  

  return (
    <View className='flex-col items-center px-4 mb-14'>
      <View className='flex-row gap-3 items-start'>
        <View className='justify-center items-center flex-row flex-1'>
          <View className='w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5'>
            <Image
              source={{ uri: avatar }}
              className='w-full h-full rounded-lg'
              resizeMode='cover' />
          </View>

          <View className='justify-center flex-1 ml-3 gap-y-1'>
            <Text className='text-white font-psemibold text-sm' numberOfLines={1}>{title}</Text>
            <Text className='text-xs text-gray-100 font-pregular' numberOfLines={1}>{username}</Text>
          </View>
        </View>

        <View className='pt-2'>
          <Image
            source={icons.menu}
            className='w-5 h-5'
            resizeMode='contain' />
        </View>
      </View>

      {play ? (
        <Video
        source={{ uri: video }}
        style={[styles.video, { transform: [{ rotate: `${screen}deg` }] }]}
        resizeMode={ResizeMode.CONTAIN}
        onFullscreenUpdate={(event) => {
          const fullscreenStatus = event.fullscreenUpdate;
          if (fullscreenStatus === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT) {
            setScreen(90); // Set to landscape
          } else if (fullscreenStatus === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS) {
            setScreen(0); // Set to portrait
          }
        }}
        shouldPlay
        useNativeControls
        onError={() => setPlay(false)}
        onPlaybackStatusUpdate={(status) => {
          if (status.error) {
            Alert.alert("Error", "An error occurred when playing the video");
            setPlay(false);
          }
          if (status.didJustFinish) {
            setPlay(false);
            console.log("Video Completed Playing.");
          }
        }}
      />
      
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
        >
          <Image
            source={{ uri: thumbnail }}
            className='w-full h-full rounded-xl'
            resizeMode='cover'
          />
          <Image
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 240,
    borderRadius: 12,
    marginTop: 12,
    backgroundColor: 'black',
    position: 'relative',
    zIndex: 20,
  }
});

export default VideoCard;