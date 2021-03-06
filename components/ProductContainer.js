import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");

const ProductContainer = (props) => {
  return (
    <TouchableOpacity>
      <ProductCard data={props} />
      {/* <View
        style={{
          elevation: 8,
          backgroundColor: "#f2f2f2",
          marginVertical: 15,
          padding: 10,
          width: width / 2,
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
      </View> */}
    </TouchableOpacity>
  );
};

export default ProductContainer;
