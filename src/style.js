import { StyleSheet, Dimensions } from "react-native";
var deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent",
    borderTopEndRadius: 50
  },
  container: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
    alignSelf: "center",
    width: deviceWidth - 25,
    height: 0,
    overflow: "hidden"
  }
});

export default styles;
