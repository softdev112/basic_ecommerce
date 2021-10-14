import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// styling
import { sizes } from '../../../assets/theme/global';
import styles from './styles';
// types
import { RootNavProps } from '../../types/RootParamList';
// mock data
import { categories, popular, products } from '../../../assets/data';
// components
import FeaturedCard from '../../../components/FeaturedCard';
import RecentCard from '../../../components/RecentCard';

export default function Home({}: RootNavProps<'Home'>) {
  return (
    <ScrollView style={styles.container}>
      {/* Top app bar */}
      <SafeAreaView style={[styles.row, styles.safeAreaContainer]}>
        <View>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.safeAreaImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Feather name="shopping-bag" size={10} style={styles.shoppingIcon} />
        </View>
      </SafeAreaView>

      {/* Home Page Banner  */}
      <Image
        source={require('../../../assets/images/nft_cover.webp')}
        style={styles.bannerImg}
        resizeMode="cover"
      />

      {/* Cateogories  */}
      <View
        style={[
          styles.row,
          { marginHorizontal: sizes.s10, marginVertical: sizes.s15 },
        ]}
      >
        {categories.map(category => (
          <View style={styles.categoryContainer} key={category.id}>
            <View style={styles.iconContainer}>
              <View
                style={[styles.bgIcon, { backgroundColor: category.color }]}
              />
              <MaterialCommunityIcons
                name={category.icon}
                size={20}
                color={category.color}
              />
            </View>
            <Text>{category.name}</Text>
          </View>
        ))}
      </View>

      {/* Featured Section */}
      <View style={{ marginHorizontal: sizes.s20 }}>
        <Text style={styles.heading}>Featured NFT's</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => <FeaturedCard item={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 5,
          }}
        />
      </View>

      {/* Recent NFT's section */}
      <View style={{ marginHorizontal: sizes.s20 }}>
        <Text style={styles.heading}>Recent NFT's</Text>
        {popular.map(item => (
          <RecentCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
