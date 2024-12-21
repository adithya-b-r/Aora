import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '@/components/FormField';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      router.replace('/home');
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full flex-row items-center justify-center'>
      <ScrollView>
        <View className='w-full px-4 my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white font-psemibold mt-10'>Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-10"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType=""
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <View className='flex-row justify-center pt-5 gap-2'>
            <Text className='text-gray-100 font-pregular'>Don't have an account?</Text>
            <Link href={"/sign-up"} className='text- font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn