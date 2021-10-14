import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../assets/theme/global';
import styles from './styles';

type Props = {
  item: {
    id: string;
    title: string;
    price: string | number;
    image: string;
    rating: string;
  };
};

export default function RecentCard({ item }: Props) {
  return (
    <View>
      <View
        style={[
          styles.popularCardWrapper,
          { marginTop: item.id === '1' ? 10 : 20 },
        ]}>
        <View>
          <View style={styles.popularTopWrapper}>
            <MaterialCommunityIcons
              name="crown"
              size={15}
              color={colors.pink}
              style={styles.popularCrown}
            />
            <Text style={styles.popularTopText}>top of the week</Text>
          </View>

          {/* Name & Price */}
          <View style={styles.popularMiddleWrapper}>
            <Text style={styles.popularTopText}>{item.title}</Text>
            <Text style={styles.popularSubText}>Eth {item.price}</Text>
          </View>

          <View style={styles.popularBottomWrapper}>
            {/* Add to Cart button */}
            <TouchableOpacity
              style={styles.plusWrapper}
              onPress={() => {
                // TODO: implement add to cart
              }}>
              <Feather
                name="plus"
                size={12}
                color={colors.white}
                testID="PlusButton"
              />
            </TouchableOpacity>

            {/* Ratings */}
            <View style={styles.ratingWrapper}>
              <MaterialCommunityIcons
                name="star"
                size={14}
                color={colors.darkgray}
              />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </View>

        {/* NFT image */}
        <View style={styles.popularRightWrapper}>
          <Image style={styles.popularImage} source={{ uri: item.image }} />
        </View>
      </View>
    </View>
  );
}
