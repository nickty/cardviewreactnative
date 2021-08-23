import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import products from "./assets/data/products.json";
import ProductContainer from "./components/ProductContainer";
// const products = require("./assets/data/products.json");

export default function App() {
  return (
    <>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30, marginTop: 30 }}>Our Shop</Text>
        </View>
        <ScrollView>
          {products.length > 0 ? (
            products.map((object) => {
              return <ProductContainer object={object} />;
            })
          ) : (
            <Text>No products available</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
