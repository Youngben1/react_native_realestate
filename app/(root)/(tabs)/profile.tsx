import icons from '@/constants/icons';
import images from '@/constants/images';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'


interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => (
  <TouchableOpacity className='flex flex-row items-center py-3 justify-between' onPress={onPress}>
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      <Text className={`text-black-300 text-lg font-rubik-medium ${textStyle}`}>{title}</Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className='size-5' />}
  </TouchableOpacity>
)

const Profile = () => {
  const handleLogout = async () => {};

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7' >
          <View className='flex flex-row mt-5 justify-between items-center'>
            <Text className='text-xl font-rubik-bold'>Profile</Text>
            <Image source={icons.bell} className='size-5'/>
          </View>

          <View className='flex justify-center mt-5 flex-row'>
            <View className='flex flex-col items-center relative mt-5'>
              <Image source={images.avatar} className='size-44 relative rounded-full' />
              <TouchableOpacity className='absolute b-11 r-2'>
                <Image source={icons.edit} className='size-9' />
              </TouchableOpacity>
              <Text className='text-2xl mt-2 font-rubik-bold'>Benhamin</Text>
            </View>
          </View>

          <View className='flex flex-col mt-10'>
            <SettingsItem icon={icons.calender} title='My Bookings' />
            <SettingsItem icon={icons.wallet} title='Payments' />
            
            <View>

            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;