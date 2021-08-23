import React from "react";
import { ScrollView, Text, View } from "react-native";

const ProductContainer = (props) => {
  return (
    <View
      style={{
        elevation: 8,
        backgroundColor: "#f2f2f2",
        marginVertical: 15,
        padding: 10,
      }}
    >
      <Text
        style={{
          backgroundColor: "green",
          alignItems: "center",
          textAlign: "center",
          padding: 5,
        }}
      >
        {props.object.id}
      </Text>
      <Text style={{ fontSize: 20 }}>{props.object.name}</Text>
      <Text>{props.object.price}</Text>
      <Text>{props.object.description}</Text>
    </View>
  );
};

export default ProductContainer;
