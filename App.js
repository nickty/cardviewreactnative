import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import products from "./assets/data/products.json";
import ProductContainer from "./components/ProductContainer";
// const products = require("./assets/data/products.json");

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text>Our Shop</Text>
        </View>
        <View>
          {products.length > 0 ? (
            products.map((object) => {
              return <ProductContainer object={object} />;
            })
          ) : (
            <Text>No products available</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
