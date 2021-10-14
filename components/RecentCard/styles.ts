import { StyleSheet } from 'react-native';
import { colors } from '../../assets/theme/global';

const styles = StyleSheet.create({
  // popular data
  popularCardWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  // left top wrapper
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  popularCrown: {
    marginRight: 10,
  },
  popularTopText: {
    color: colors.black,
  },
  popularSubText: {
    color: colors.darkgray,
  },
  // left middle wrapper
  popularMiddleWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  popularBottomWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  plusWrapper: {
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: colors.darkgray,
    marginLeft: 5,
  },

  popularWrapper: {
    marginBottom: 20,
  },
  //   right wrapper
  popularRightWrapper: {
    marginLeft: 40,
  },
  popularImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
    borderRadius: 15,
  },
});

export default styles;
