import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

type Props = {
  item: {
    name: string;
    price: string;
    thumbnail: string;
  };
};

export default function FeaturedCard({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <View style={styles.productContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Eth {item.price}</Text>
      </View>
    </View>
  );
}
