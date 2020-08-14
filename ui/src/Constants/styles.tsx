import { StyleSheet } from 'react-native';

/* Styles Accessible from anywhere in the Application */
export default StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    marginLeft: -5,
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 30,
    color: "#456078"
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "#456078"
  },
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between'
  }
})