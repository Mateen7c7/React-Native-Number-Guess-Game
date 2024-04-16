import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styes.container}>
      <Text style={styes.numberText}>{children}</Text>
    </View>
  );
}

const styes = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500,
  },
});

export default NumberContainer;
