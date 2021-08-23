import React from "react";
import { Text, View, Dimensions } from "react-native";

// const { width } = Dimensions.get("window");

const ProductCard = (props) => {
  console.log(props.data.object);
  return (
    <View
      style={{
        elevation: 2,
        backgroundColor: "#f2f2f2",
        marginVertical: 15,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text>{props.data.object.id}</Text>
      <Text>{props.data.object.name}</Text>
      <Text>{props.data.object.price}</Text>
      <Text>{props.data.object.description}</Text>
    </View>
  );
};

export default ProductCard;
