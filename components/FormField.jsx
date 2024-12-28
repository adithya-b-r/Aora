import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { icons } from '../constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, textStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium mb-[5px]'>{title}</Text>

      <View className='border-2 border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
          className={`flex-1 text-white font-psemibold text-base ${textStyles}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-7 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField