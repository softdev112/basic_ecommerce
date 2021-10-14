import { StyleSheet } from 'react-native';
import { colors, sizes } from '../../../assets/theme/global';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  safeAreaContainer: {
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: 8,
  },
  safeAreaImage: { height: '100%', width: 60 },
  shoppingIcon: {
    color: colors.black,
    fontSize: 24,
    marginRight: 2,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bannerImg: {
    height: 200,
    width: '100%',
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 5,
  },
  iconContainer: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  productView: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  bgIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 100,
    opacity: 0.1,
    zIndex: -1,
  },
  heading: {
    fontSize: sizes.s20,
    fontWeight: '700',
    letterSpacing: 2,
    color: colors.black,
  },
});

export default styles;
