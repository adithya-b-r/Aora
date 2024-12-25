import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { ScreenOrientation } from 'expo';

import { icons } from '@/constants';

const VideoCard = ({ video: { id, title, thumbnail, prompt, video, creator: { username, avatar } } }) => {
  const [play, setPlay] = useState(false);
  const [orientationIsLandscape, setOrientationIsLandscape] = useState(false);

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
        <View className="w-full h-60 rounded-xl mt-3 overflow-hidden">
          <Video
            source={{ uri: video }}
            style={{ width: '100%', height: '100%' }}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            // isLooping
            useNativeControls
            onError={() => setPlay(false)}

            onFullscreenUpdate={async () => {
              await ScreenOrientation.lockAsync(
                orientationIsLandscape ? ScreenOrientation.OrientationLock.PORTRAIT :
                  ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
              );
              setOrientationIsLandscape(!orientationIsLandscape);
            }}

            onPlaybackStatusUpdate={(status) => {
              if (status.error) {
                Alert.alert("Error", "An error occurred when playing the video")
                setPlay(false)
              }
              if (status.didJustFinish) {
                setPlay(false);
                console.log("Video Completed Playing.");
              }
            }
            }
          />
        </View>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'
        >

          <Image
            source={{ uri: thumbnail }}
            className='w-full h-full rounded-xl mt-3'
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

export default VideoCard