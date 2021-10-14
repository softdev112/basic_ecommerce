import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../assets/theme/global';

const styles = StyleSheet.create({
  container: {
    margin: 3,
    marginRight: 20,
    width: 150,
    elevation: 3,
    backgroundColor: colors.white,
    padding: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
  productContainer: {
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
  name: { fontWeight: '700', color: colors.black, fontSize: sizes.s14 },
  price: { color: colors.black, fontSize: sizes.s13 },
  image: {
    width: '100%',
    height: 100,
  },
});

export default styles;
