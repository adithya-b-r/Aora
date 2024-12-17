import { View, Text, Image } from 'react-native'
import React from 'react'

import { images } from '@/constants';

interface EmptyStateProps{
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({title, subtitle}) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image 
        source={images.empty}
        className='w-[270px] h-[210px]'
        resizeMode='contain'
      />

      <Text className='font-pmedium text-sm text-gray-100'>{title}</Text>
      <Text className='text-lg text-center font-psemibold text-white'>{subtitle}</Text>
    </View>
  )
}

export default EmptyState